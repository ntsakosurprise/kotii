/* eslint-disable no-unused-vars */
// const path = require("path");
// const fs = require("fs");
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

const ExtractImports = (path, state) => {
  const source = path.node.source.value;

  if (source.startsWith(".")) {
    state.deps.add(source);
  }

  path.node.specifiers.forEach((s) => {
    state.imports[s.local.name] = source;
  });
};
const ExtractVariables = (path, state) => {
  const { id, init } = path.node;
  if (!t.isIdentifier(id)) return;

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
};
const ProgramExiter = (path, state) => {
  const refinedExternals = {};

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

    if (state.componentBindings.has(name)) {
      refinedExternals[name] = {
        type: "runtime",
      };
    }
  }

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
  const elementChildren = path.node.children;
  if (!elementChildren) return false;

  elementChildren.forEach((child) => {
    if (child?.type?.toLowerCase() === "jsxelement") {
      if (child?.attributes?.length > 0) {
        child.attributes.forEach((attribute) => {
          if (!/^on[A-Z]/.test(attribute)) {
            console.log("THIS IS AN EVEN ATTRIBUTE", attribute);
          }
        });
      }
      if (child?.children) {
        console.log("CHILD OF INTERACTIVE HAS CHILDREN");
      }
    }
  });
  // const localName = opening;
  // if (!localName) return;

  // const binding = path.scope.getBinding(localName);
  // if (!binding) return;

  // if (
  //   !binding.path.isImportSpecifier() &&
  //   !binding.path.isImportDefaultSpecifier()
  // )
  //   return;

  // const source = binding.path.parent.source.value;
  // if (!source.includes("Interactive")) return;

  // // 🔥 Traverse ALL children
  // path.traverse({
  //   JSXAttribute(attrPath) {
  //     collectInteractiveExternals(attrPath, state);
  //   },
  // });
};

// Local Helpers

function collectInteractiveExternals(path, state) {
  if (!path.isJSXAttribute()) return;
  if (!/^on[A-Z]/.test(path.node.name.name)) return;

  const value = path.node.value;
  if (!t.isJSXExpressionContainer(value)) return;

  const fn = value.expression;
  if (!t.isFunctionExpression(fn) && !t.isArrowFunctionExpression(fn)) return;

  // Local bindings
  const localBindings = new Set(fn.params.map((p) => p.name));

  path.get("value.expression").traverse({
    VariableDeclarator(p) {
      if (t.isIdentifier(p.node.id)) {
        localBindings.add(p.node.id.name);
      }
    },
    FunctionDeclaration(p) {
      if (p.node.id) localBindings.add(p.node.id.name);
    },
  });

  // Free identifiers
  path.get("value.expression").traverse({
    Identifier(p) {
      const name = p.node.name;

      if (
        localBindings.has(name) ||
        state.reactStateIdentifiers.has(name) ||
        BUILTINS.has(name) ||
        name === "undefined"
      )
        return;

      if (
        t.isMemberExpression(p.parent) &&
        p.parent.property === p.node &&
        !p.parent.computed
      )
        return;

      state.externals.add(name);
    },
  });
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
    state.componentBindings.add(id.name);

    // Only statics go here
    if (
      t.isLiteral(init) ||
      t.isArrayExpression(init) ||
      t.isObjectExpression(init) ||
      t.isFunctionExpression(init) ||
      t.isArrowFunctionExpression(init)
    ) {
      state.componentStatics.set(id.name, init);
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
