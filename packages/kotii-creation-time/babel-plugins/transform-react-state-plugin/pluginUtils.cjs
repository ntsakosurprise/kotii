/* eslint-disable no-unused-vars */
// const path = require("path");
// const fs = require("fs");
const { jSXAttribute } = require("@babel/types");
const t = require("@babel/types");
const generate = require("@babel/generator").default;
const BUILTINS = new Set([
  "Math",
  "console",
  "Date",
  "JSON",
  "Array",
  "Object",
  "Number",
  "String",
  "Boolean",
  "Promise",
  "Symbol",
  "Set",
  "Map",
  "WeakMap",
  "WeakSet",
  "BigInt",
  "Intl",
]);
const REACT_OPT_HOOKS = new Set(["useMemo", "useCallback"]);

const ExtractImports = (path, state, options) => {
  const source = path.node.source.value;
  console.log(
    "IMPORTS EXTRACT SOURCE",
    path.node.source,
    "NODE SPECIFIERS",
    path.node.specifiers
  );

  // Resolve relative / aliased paths
  if (source.startsWith(".") || options.aliases[source]) {
    state.deps.add(options.staticDepsResolver(source));
  }

  path.node.specifiers.forEach((s) => {
    // Store both the local alias and the original imported name
    state.imports[s.local.name] = {
      importedName: s.imported ? s.imported.name : "default", // fallback to "default" for default imports
      source,
    };
  });
};
const ExtractVariables = (path, state) => {
  const { init } = path.node;
  if (
    t.isCallExpression(init) &&
    t.isIdentifier(init.callee) &&
    REACT_OPT_HOOKS.has(init.callee.name)
  ) {
    const fnArg = init.arguments[0];
    if (t.isFunction(fnArg)) {
      collectInteractiveExternals(path.get("init.arguments.0"), state);
    }
  }

  // useState
  VariablesGetState(path, state);

  // Top-level statics
  VariablesGetFileLevelIdentifiers(path, state);

  // Component-scoped binding (🔥 ALWAYS track)
  VariablesGetComponentLevelIdentifiers(path, state);
};
const ExtractJSX = (path, state) => {
  TransformConditionalRender(path, state);
};
const ProgramEnter = (path, state) => {
  state.externals = new Set();
  state.deps = new Set();
  state.imports = {};
  state.reactStateIdentifiers = new Set();
  state.topLevelStatics = new Map();
  state.componentStatics = new Map();
  state.componentBindings = new Set();
  state.derivedStatics = new Map();
  state.reactOptHooks = [];
  console.log("PROGRAM ENTER FILE NAME", state.filename);
};
const ProgramExiter = (path, state) => {
  const refinedExternals = {};
  console.log("EXITER PROGRAM", state.filename, state.externals);

  for (const name of state.externals) {
    if (state.topLevelStatics.has(name)) {
      refinedExternals[name] = {
        type: "static",
        value: state.topLevelStatics.get(name),
      };
      continue;
    }

    if (state.componentStatics.has(name)) {
      refinedExternals[name] = {
        type: "static",
        value: state.componentStatics.get(name),
      };
      continue;
    }

    if (state.derivedStatics.has(name)) {
      refinedExternals[name] = {
        type: "runtime",
        factory: state.derivedStatics.get(name),
      };
      continue;
    }

    if (state.componentBindings.has(name)) {
      refinedExternals[name] = {
        type: "runtime",
      };
    }

    if (!refinedExternals[name]) refinedExternals[name] = name;
  }

  console.log("THE DERIVED STATICS", state.derivedStatics);

  state.file.metadata.__STATIC_META__ = {
    externals: refinedExternals,
    deps: [...state.deps],
    imports: state.imports,
    reactOptHooks: state.reactOptHooks,
  };
};
const MatchJSXElement = (path, state) => {
  // const opening = path.node.openingElement;
  // const openingType = opening?.name?.type;
  // const jsxName = opening?.name?.name;
  // if (openingType.toLowerCase() !== "jsxidentifier") return false;
  // if (jsxName.toLowerCase() !== "interactive") return false;
  // console.log("THIS IS INTERACTIVE JSX ELEMENT", openingType, jsxName);
  // const elementChildren = path.get("children");
  // if (!elementChildren) return false;
  // handleInteractiveChildren(elementChildren, path, state);

  const opening = path.node.openingElement;
  const openingType = opening?.name?.type;
  const jsxName = opening?.name?.name;

  if (openingType?.toLowerCase() !== "jsxidentifier") return false;

  // 1️⃣ If Interactive → collect event externals
  if (jsxName?.toLowerCase() === "interactive") {
    const elementChildren = path.get("children");
    if (elementChildren) {
      handleInteractiveChildren(elementChildren, path, state);
    }
  }

  // 2️⃣ ALWAYS attach state bindings
  attachStateBindings(path, state);
};

// Local Helpers
function handleInteractiveChildren(elementChildren, path, state) {
  if (!elementChildren) return false;

  elementChildren.forEach((child) => {
    if (child?.type?.toLowerCase() === "jsxelement") {
      child.traverse({
        JSXAttribute(attribute) {
          const name = attribute.get("name");

          if (!name.isJSXIdentifier() || !/^on[A-Z]/.test(name.node.name)) {
            return;
          }

          const valuePath = attribute.get("value");
          if (!valuePath.isJSXExpressionContainer()) return;

          const expr = valuePath.get("expression");

          console.log(
            "handler:",
            expr.node.type,
            expr.isArrowFunctionExpression()
          );
          if (!isEventHandlerExpression(expr)) return;

          collectInteractiveExternals(expr, state);
        },
      });
      if (child?.children) {
        handleInteractiveChildren(child.get("children"), path, state);
      }
    } else if (child?.children) {
      handleInteractiveChildren(child.get("children"), path, state);
    }
  });
}
function collectFromIdentifierBinding(idPath, state, visited = new Set()) {
  const name = idPath.node.name;
  if (visited.has(name)) return;
  visited.add(name);

  const binding = idPath.scope.getBinding(name);
  console.log("THE ID BINDING", binding);
  if (!binding) return;

  const init = binding.path.node.init;
  console.log("INIT BINDING BEFORE", name);
  if (!init) return;
  console.log("INIT BINDING AFTER", name, t.isCallExpression(init));

  // Store the function if needed
  if (t.isFunctionExpression(init) || t.isArrowFunctionExpression(init)) {
    console.log("THE INIT FUNCTION EXPRESSION", name);
    state.componentStatics.set(name, init);

    collectInteractiveExternals(binding.path.get("init"), state, visited);
  }
}

function collectInteractiveExternals(
  path,
  state,
  visited = new Set(),
  isReactOptHook = false
) {
  // 1️⃣ Inline function handlers
  if (path.isFunction()) {
    const localBindings = new Set();

    // params
    for (const param of path.node.params) {
      if (t.isIdentifier(param)) {
        localBindings.add(param.name);
      }
    }

    // locals inside body
    path.traverse({
      VariableDeclarator(p) {
        if (t.isIdentifier(p.node.id)) {
          localBindings.add(p.node.id.name);
        }
      },
      FunctionDeclaration(p) {
        if (p.node.id) {
          localBindings.add(p.node.id.name);
        }
      },
      CatchClause(p) {
        console.log("THE CATCH CLAUSE", p.node.param);
        const param = p.node.param;

        if (param && param.type === "Identifier") {
          console.log("PARAM TYPE ID");
          const name = param.name;
          localBindings.add(name);
        }
      },
    });

    console.log("THE LOCAL BINDINGS", localBindings);

    // free identifiers
    path.traverse({
      Identifier(p) {
        const name = p.node.name;

        if (
          localBindings.has(name) ||
          state.reactStateIdentifiers.has(name) ||
          BUILTINS.has(name) ||
          name === "undefined"
        ) {
          return;
        }

        if (
          t.isMemberExpression(p.parent) &&
          p.parent.property === p.node &&
          !p.parent.computed
        ) {
          return;
        }

        if (
          t.isObjectProperty(p.parent) &&
          p.parent.key === p.node &&
          !p.parent.computed
        ) {
          return;
        }

        state.externals.add(name);
        console.log("THE CURRENT FREE IDENTIFIER", name);

        // 🔥 NEW: follow binding if function
        collectFromIdentifierBinding(p, state, visited);
      },
    });
    console.log("THE STATE.AFTER BINDING", state.externals);
    console.log("THE LOCAL BINDING", localBindings);

    return;
  }

  // 2️⃣ Referenced handlers: onClick={handleClick}
  if (path.isIdentifier() || path.isMemberExpression()) {
    if (path.isIdentifier()) {
      collectFromIdentifierBinding(path, state);
    }

    return;
  }

  // 3️⃣ Logical handlers: cond && handleClick
  if (path.isLogicalExpression()) {
    collectInteractiveExternals(path.get("left"), state);
    collectInteractiveExternals(path.get("right"), state);
    return;
  }

  // 4️⃣ Conditional handlers: cond ? a : b
  if (path.isConditionalExpression()) {
    collectInteractiveExternals(path.get("consequent"), state);
    collectInteractiveExternals(path.get("alternate"), state);
    return;
  }
}

function isEventHandlerExpression(expr) {
  return (
    expr.isFunction() || // function () {}, () => {}
    expr.isIdentifier() || // handleClick
    expr.isMemberExpression() || // this.handleClick
    expr.isLogicalExpression() || // cond && handleClick
    expr.isConditionalExpression() || // cond ? foo : bar
    expr.isSequenceExpression() || // foo, bar
    expr.isCallExpression() // onClick={foo()}
  );
}

const VariablesGetState = (path, state) => {
  const { init } = path.node;

  if (
    t.isCallExpression(init) &&
    t.isIdentifier(init.callee, { name: "useState" }) &&
    t.isArrayPattern(path.node.id)
  ) {
    const [stateId, setterId] = path.node.id.elements;
    if (!stateId || !setterId) return;

    state.reactStateIdentifiers.add(stateId.name);
    state.reactStateIdentifiers.add(setterId.name);

    init.callee = t.identifier("__useState");
    init.arguments = [
      init.arguments[0],
      t.stringLiteral(stateId.name),
      t.stringLiteral(setterId.name),
    ];
    return true;
  }
  return false;
};
const VariablesGetFileLevelIdentifiers = (path, state) => {
  const { init, id } = path.node;
  if (!path.scope.parent) {
    if (
      t.isLiteral(init) ||
      t.isArrayExpression(init) ||
      t.isObjectExpression(init)
    ) {
      state.topLevelStatics.set(id.name, init);
    }
    return;
  }
};
const VariablesGetComponentLevelIdentifiers = (path, state) => {
  const { init, id } = path.node;

  if (
    path.scope.block.type === "ArrowFunctionExpression" ||
    path.scope.block.type === "FunctionDeclaration"
  ) {
    // 1️⃣ Always track component bindings
    state.componentBindings.add(id.name);

    // 2️⃣ True component statics (unchanged)
    if (
      t.isLiteral(init) ||
      t.isArrayExpression(init) ||
      t.isObjectExpression(init) ||
      t.isFunctionExpression(init) ||
      t.isArrowFunctionExpression(init)
    ) {
      state.componentStatics.set(id.name, init);
    }

    // 3️⃣ 🔥 ADD: React optimisation hooks
    if (
      t.isCallExpression(init) &&
      t.isIdentifier(init.callee) &&
      REACT_OPT_HOOKS.has(init.callee.name)
    ) {
      const fnArg = init.arguments[0];

      if (t.isFunction(fnArg)) {
        // This function *defines* the runtime value
        state.derivedStatics.set(id.name, fnArg);
        state.reactOptHooks.push(id.name);

        // Traverse the factory function
        collectInteractiveExternals(path.get("init.arguments.0"), state);
      }
    }
  }
};

const TransformConditionalRender = (path, state) => {
  const exprPath = path.get("expression");
  console.log("AFTER GET EXPRESSION", exprPath.isLogicalExpression());
  if (!t.isLogicalExpression(exprPath.node, { operator: "&&" })) return;
  console.log("LOGICAL EXPRESSION CHECK PASSES");

  // Flatten nested && expressions
  const parts = flattenLogical(exprPath.node);

  if (parts.length < 2) return;

  const lastPart = parts[parts.length - 1];

  //  Only transform if final operand is JSX
  if (!t.isJSXElement(lastPart) && !t.isJSXFragment(lastPart)) return;

  const jsxNode = t.cloneNode(lastPart, true);
  const conditionNodes = parts.slice(0, -1);

  //  Generate condition string safely
  const combinedCondition = conditionNodes
    .map((node) => generate(node).code)
    .join(" && ");

  //  Inject data-visible attribute
  const openingEl = jsxNode.openingElement;

  const existingAttrIndex = openingEl.attributes.findIndex(
    (a) =>
      t.isJSXAttribute(a) && t.isJSXIdentifier(a.name, { name: "data-visible" })
  );

  const visibleAttr = t.jsxAttribute(
    t.jsxIdentifier("data-visible"),
    t.stringLiteral(combinedCondition)
  );

  if (existingAttrIndex >= 0) {
    openingEl.attributes[existingAttrIndex] = visibleAttr;
  } else {
    openingEl.attributes.push(visibleAttr);
  }

  //  Collect externals BEFORE replacement
  conditionNodes.forEach((node) => {
    collectRenderExternalsFromNode(node, state, path);
  });

  //  Replace entire JSXExpressionContainer
  path.replaceWith(jsxNode);
};

function collectRenderExternalsFromNode(node, state, parentPath) {
  const tempPath = parentPath.scope.path;

  tempPath.traverse({
    Identifier(p) {
      if (p.node !== node && !nodeContains(node, p.node)) return;

      const name = p.node.name;

      if (
        BUILTINS.has(name) ||
        state.reactStateIdentifiers.has(name) ||
        state.componentBindings.has(name) ||
        name === "undefined"
      ) {
        return;
      }

      if (
        t.isMemberExpression(p.parent) &&
        p.parent.property === p.node &&
        !p.parent.computed
      ) {
        return;
      }

      state.externals.add(name);
    },
  });
}
function flattenLogical(node, parts = []) {
  if (t.isLogicalExpression(node, { operator: "&&" })) {
    flattenLogical(node.left, parts);
    flattenLogical(node.right, parts);
  } else {
    parts.push(node);
  }
  return parts;
}
/**
 * Checks if a child node exists somewhere inside a parent node
 * @param {Node} parent - AST node to search in
 * @param {Node} child - AST node to check
 * @returns {boolean}
 */
function nodeContains(parent, child) {
  let found = false;

  // traverseFast visits every node recursively
  t.traverseFast(parent, (n) => {
    if (n === child) {
      found = true;
    }
  });

  return found;
}
function attachStateBindings(path, state) {
  const openingEl = path.node.openingElement;
  if (!openingEl) return;

  const bindings = new Set();

  // Attributes
  openingEl.attributes.forEach((attr) => {
    if (!t.isJSXAttribute(attr)) return;
    if (!t.isJSXExpressionContainer(attr.value)) return;

    if (t.isJSXIdentifier(attr.name) && /^on[A-Z]/.test(attr.name.name)) {
      return;
    }

    collectStateFromExpression(attr.value.expression, state, bindings);
  });

  // Direct children only
  path.node.children.forEach((child) => {
    if (!t.isJSXExpressionContainer(child)) return;

    collectStateFromExpression(child.expression, state, bindings);
  });

  if (bindings.size === 0) return;

  openingEl.attributes.push(
    t.jsxAttribute(
      t.jsxIdentifier("data-bind"),
      t.stringLiteral([...bindings].join("."))
    )
  );
}

function collectStateFromExpression(node, state, bindings) {
  if (!node) return;

  // Direct identifier: {username}
  if (t.isIdentifier(node)) {
    if (state.reactStateIdentifiers.has(node.name)) {
      bindings.add(node.name);
    }
    return;
  }

  // Member expression: errors.username.message
  if (
    t.isMemberExpression(node) ||
    (t.isOptionalMemberExpression && t.isOptionalMemberExpression(node))
  ) {
    const root = getRootIdentifier(node);

    if (root && state.reactStateIdentifiers.has(root.name)) {
      bindings.add(buildMemberPath(node));
    }

    return; // 🚨 STOP HERE — do not traverse deeper
  }

  // Logical expressions etc (rare for bind)
  if (t.isLogicalExpression(node)) {
    // If this is a conditional render (right side JSX),
    // skip binding at this level — it belongs to the JSX child.
    if (t.isJSXElement(node.right) || t.isJSXFragment(node.right)) {
      return;
    }

    collectStateFromExpression(node.left, state, bindings);
    collectStateFromExpression(node.right, state, bindings);
    return;
  }
}
function getRootIdentifier(node) {
  let current = node;

  while (
    t.isMemberExpression(current) ||
    (t.isOptionalMemberExpression && t.isOptionalMemberExpression(current))
  ) {
    current = current.object;
  }

  return t.isIdentifier(current) ? current : null;
}

function buildMemberPath(node) {
  const parts = [];
  let current = node;

  while (
    t.isMemberExpression(current) ||
    (t.isOptionalMemberExpression && t.isOptionalMemberExpression(current))
  ) {
    if (t.isIdentifier(current.property)) {
      parts.unshift(current.property.name);
    }
    current = current.object;
  }

  if (t.isIdentifier(current)) {
    parts.unshift(current.name);
  }

  return parts.join(".");
}

const TRAVERSERS = {
  ExtractImports,
  ExtractVariables,
  ProgramEnter,
  ProgramExiter,
  ExtractJSX,
  MatchJSXElement,
};

module.exports = {
  BUILTINS,
  TRAVERSERS,
};
