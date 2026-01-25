/* eslint-disable no-unused-vars */
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

const transformReactStatePlugin = () => {
  const externals = new Set();
  const deps = new Set();
  const imports = {};
  const reactStateIdentifiers = new Set();
  const topLevelStatics = new Map();
  const componentStatics = new Map();

  return {
    visitor: {
      VariableDeclarator(path) {
        const { id, init } = path.node;

        // ---- useState handling (unchanged) ----
        if (
          t.isCallExpression(init) &&
          t.isIdentifier(init.callee, { name: "useState" }) &&
          t.isArrayPattern(path.node.id)
        ) {
          const [stateId, setterId] = path.node.id.elements;
          if (!stateId || !setterId) return;

          reactStateIdentifiers.add(stateId.name);
          reactStateIdentifiers.add(setterId.name);

          init.callee = t.identifier("__useState");
          init.arguments = [
            init.arguments[0],
            t.stringLiteral(stateId.name),
            t.stringLiteral(setterId.name),
          ];
          return;
        }

        // Top-level static (program scope)
        if (!path.scope.parent) {
          if (
            t.isLiteral(init) ||
            t.isArrayExpression(init) ||
            t.isObjectExpression(init)
          ) {
            topLevelStatics.set(id.name, init);
          }
          return;
        }

        // Component-scoped statics (functions, arrays, objects, literals)
        if (
          path.scope.block.type === "ArrowFunctionExpression" ||
          path.scope.block.type === "FunctionDeclaration"
        ) {
          if (
            t.isLiteral(init) ||
            t.isArrayExpression(init) ||
            t.isObjectExpression(init) ||
            t.isArrowFunctionExpression(init) ||
            t.isFunctionExpression(init)
          ) {
            componentStatics.set(id.name, init);
          }
        }
      },

      ImportDeclaration(path) {
        const source = path.node.source.value;

        if (source.startsWith(".")) {
          deps.add(source);
        }

        path.node.specifiers.forEach((s) => {
          if (t.isImportSpecifier(s)) {
            imports[s.local.name] = source;
          } else if (t.isImportDefaultSpecifier(s)) {
            imports[s.local.name] = source;
          } else if (t.isImportNamespaceSpecifier(s)) {
            imports[s.local.name] = source;
          }
        });
      },

      JSXAttribute(path, state) {
        collectInteractiveExternals(path, externals, reactStateIdentifiers);
      },

      Program: {
        exit(path, state) {
          let refinedExternals = {};
          for (const name of externals) {
            if (topLevelStatics.has(name)) {
              refinedExternals[name] = topLevelStatics.get(name);
              continue;
            }

            if (componentStatics.has(name)) {
              refinedExternals[name] = componentStatics.get(name);
              continue;
            }
          }
          console.log(
            "THE STATE IN PLUGIN",
            state.filename,
            externals,
            refinedExternals
          );
          state.file.metadata.__STATIC_META__ = {
            externals: refinedExternals,
            deps: [...deps],
            imports,
          };
        },
      },
    },
  };
};

function collectInteractiveExternals(
  path,
  externals,
  reactStateVars = new Set()
) {
  if (!/^on[A-Z]/.test(path.node.name.name)) return;
  if (
    !path.findParent(
      (p) =>
        p.isJSXElement() &&
        t.isJSXIdentifier(p.node.openingElement.name, { name: "Interactive" })
    )
  )
    return;

  const value = path.node.value;
  if (!value || value.type !== "JSXExpressionContainer") return;

  const fnExpr = value.expression;
  if (!t.isFunctionExpression(fnExpr) && !t.isArrowFunctionExpression(fnExpr))
    return;

  // Collect local bindings (params + inner vars)
  const localBindings = new Set(fnExpr.params.map((p) => p.name));

  path.get("value.expression").traverse({
    VariableDeclarator(innerPath) {
      if (t.isIdentifier(innerPath.node.id))
        localBindings.add(innerPath.node.id.name);
      else if (
        t.isObjectPattern(innerPath.node.id) ||
        t.isArrayPattern(innerPath.node.id)
      ) {
        innerPath.node.id.elements.forEach((el) => {
          if (t.isIdentifier(el)) localBindings.add(el.name);
        });
      }
    },
    FunctionDeclaration(innerPath) {
      if (innerPath.node.id) localBindings.add(innerPath.node.id.name);
    },
  });

  console.log("THE LOCAL BINDINGS", localBindings);

  // Traverse identifiers
  path.get("value.expression").traverse({
    Identifier(innerPath) {
      const name = innerPath.node.name;

      // Ignore locals, state vars, undefined, builtins
      if (
        localBindings.has(name) ||
        reactStateVars.has(name) ||
        BUILTINS.has(name) ||
        name === "undefined"
      )
        return;

      // Ignore if part of a MemberExpression property (console.log → ignore log)
      if (
        t.isMemberExpression(innerPath.parent) &&
        innerPath.parent.property === innerPath.node &&
        !innerPath.parent.computed
      )
        return;

      // Ignore if object key shorthand in object literal ({ log } → ignore log)
      if (
        t.isObjectProperty(innerPath.parent) &&
        innerPath.parent.key === innerPath.node &&
        !innerPath.parent.computed
      )
        return;

      // Ignore function names in call expression (function foo() {}, foo() → skip foo)
      // if (
      //   t.isCallExpression(innerPath.parent) &&
      //   innerPath.parent.callee === innerPath.node
      // )
      //   return;
      const binding = innerPath.scope.getBinding(name);
      if (!binding) return; // undeclared → skip
      if (
        binding.path.isFunctionDeclaration() ||
        binding.path.isFunctionExpression()
      ) {
        externals.add(name);
      }

      externals.add(name);
    },
  });
}

module.exports = transformReactStatePlugin;
