const t = require("@babel/types");
// let cwd = process.cwd();
const transformReactStatePlugin = () => {
  return {
    visitor: {
      CallExpression(path) {
        console.log("CALL EXPRESSION IN FILE", {
          type: path.node.type,
          name: path.node.name,
          loc: path.node.loc,
        });
        if (path.get("callee").isIdentifier({ name: "useState" })) {
          const declarator = path.findParent((p) => p.isVariableDeclarator());
          const stateName = declarator?.node.id.elements[0].name;

          path.replaceWith(
            t.callExpression(t.identifier("__useState"), [
              path.node.arguments[0],
              t.stringLiteral(stateName),
            ])
          );
        }
      },
    },
  };
};

module.exports = transformReactStatePlugin;
