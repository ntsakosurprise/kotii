/* eslint-disable no-unused-vars */
// const path = require("path");
// const fs = require("fs");
const { jSXAttribute } = require("@babel/types");
const t = require("@babel/types");
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

  if (source.startsWith(".") || options.aliases[source]) {
    state.deps.add(options.staticDepsResolver(source));
  }

  path.node.specifiers.forEach((s) => {
    state.imports[s.local.name] = source;
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
  const opening = path.node.openingElement;
  const localName = opening;
  if (!localName) return;

  const binding = path.scope.getBinding(localName);
  if (!binding) return;

  if (
    !binding.path.isImportSpecifier() &&
    !binding.path.isImportDefaultSpecifier()
  )
    return;

  const source = binding.path.parent.source.value;
  if (!source.includes("Interactive")) return;

  // 🔥 Traverse ALL children
  path.traverse({
    JSXAttribute(attrPath) {
      collectInteractiveExternals(attrPath, state);
    },
  });
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

    // 🔥 ADD THIS BLOCK
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
  };
};
const MatchJSXElement = (path, state) => {
  const opening = path.node.openingElement;
  const openingType = opening?.name?.type;
  const jsxName = opening?.name?.name;
  if (openingType.toLowerCase() !== "jsxidentifier") return false;
  if (jsxName.toLowerCase() !== "interactive") return false;
  console.log("THIS IS INTERACTIVE JSX ELEMENT", openingType, jsxName);
  const elementChildren = path.get("children");
  if (!elementChildren) return false;
  handleInteractiveChildren(elementChildren, path, state);
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

function collectInteractiveExternals(path, state, visited = new Set()) {
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

        // Traverse the factory function
        collectInteractiveExternals(path.get("init.arguments.0"), state, true);
      }
    }
  }
};

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
