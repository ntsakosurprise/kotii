import generate from "@babel/generator";
import * as parser from "@babel/parser";
import traverse from "@babel/traverse";
import * as t from "@babel/types";
import React from "react";
import ReactDOM from "react-dom";
import JsxParser from "react-jsx-parser";
const snippet = "<button>Click Me</button>";

const createTextEditor = (domEl, moduleResolver = () => {}) => {
  const convertCodeToAST = () => {
    const ast = parser.parse(snippet, {
      plugins: ["jsx"],
    });
    console.log("THE MADE AST;;;", ast);
    return ast;
  };

  // Manipulation of the AST
  const traverseAST = (tast) => {
    traverse(tast, {
      JSXOpeningElement(path) {
        if (
          path.node.name.name === "button" &&
          !path.node.attributes.some((attr) => attr.name.name === "visited")
        ) {
          path.node.attributes.push(
            t.jsxAttribute(
              t.jsxIdentifier("disabled"),
              t.JSXExpressionContainer(t.booleanLiteral(true))
            )
          );
        }
      },
    });
  };

  // const getAnonymousFunction = (codeToRun) => {
  //   console.log("get anonymous function running;;", codeToRun);
  //   return new Function("React", "render", "require", generate(codeToRun));
  // };

  const render = (node) => {
    console.log("THE NODE;;;", node);
    console.log("THE EL;;;", domEl);

    ReactDOM.render(<JsxParser jsx={node} />, domEl);
  };

  const require = (moduleName) => {
    return moduleResolver(moduleName);
  };

  const beginParsing = (code) => {
    console.log("parsing code", code);
    try {
      //let tsc = transpileCode(code);
      let ast = convertCodeToAST();
      console.log("The ast;;;", ast);
      traverseAST(ast);
      render(generate(ast).code);
      // return getAnonymousFunction(ast);
    } catch (parseError) {
      console.log("PARSING ERROR;;;", parseError);
      console.log(parseError.stack);
      render(<pre style={{ color: "red" }}>{parseError.message}</pre>);
    }
  };

  return {
    // returns transpiled code in a wrapper function which can be invoked later
    compile: function (code) {
      console.log("compiling");
      return beginParsing(code);
    },

    // compiles and invokes the wrapper function
    run: function (code) {
      console.log("The code is running;;;", code);
      console.log("THE VALUE OF THIS;;;", this);
      this.compile(code)(React, render, require);
    },
  };
};

export default createTextEditor;

/**
 *
 *
 * Editor To do
 * 1. Transpile code from es6 to old js [using @babel/standalone Transform]
 * 2. Parse code to Abstract syntax Tree(ast) from js using Acorn
 * 3. Search and find a React node from the ast
 * 4. Get React.createElement from the react node and parse it to source using escodegen's generate()
 * 5. Create a render function and convert it to ast passing the js source
 * 6. Create an anonymous function and pass it editor dependecies such as React, render, require
 */
