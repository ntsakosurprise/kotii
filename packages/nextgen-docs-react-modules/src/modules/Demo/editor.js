/* eslint-disable no-undef */
// const { transform } = require("@babel/standalone");
import { transform as babelTransform } from "@babel/standalone";
import * as Acorn from "acorn";
// console.log("THE TRANFORM", transform);
import { generate } from "escodegen";
import objectPath from "object-path";
import React from "react";
import ReactDOM from "react-dom";

const createTextEditor = (domEl, moduleResolver = () => {}) => {
  console.log("The passed in domEL", domEl);
  const transpileCode = (code) => {
    console.log("The raw code;;;", code);
    const transformedCode = babelTransform(code, {
      presets: ["es2015", "react"],
    }).code;
    console.log("THE TRANSFORMED", transformedCode);
    return transformedCode;
  };

  const convertCodeToAST = (code) => {
    console.log("converting to ast;;;", code);
    return Acorn.parse(code, { sourceType: "module", ecmaVersion: 2015 });
  };

  const isReactNode = (node) => {
    console.log("searchinNodee;;", node);
    const nodeType = node.type;
    const nodeObjectName = objectPath.get(
      node,
      "expression.callee.object.name"
    );
    const nodeFunc = objectPath.get(node, "expression.callee.property.name");

    return (
      nodeType === "ExpressionStatement" &&
      nodeObjectName === "react" &&
      nodeFunc === "createElement"
    );
  };

  const searchNode = (ast) => {
    const { body } = ast;
    return body.find(isReactNode);
  };

  // const setWrappingRender = (ast, reactNode) => {
  //   console.log("setting wrapping;;;", ast, reactNode);
  //   if (reactNode) {
  //     const reactNodeIndex = ast.body.indexOf(reactNode);
  //     const createElSrc = generate(reactNode).slice(0, -1);
  //     const wrappingReactRender = Acorn.parse(`render(${createElSrc})`);
  //     ast.body[reactNodeIndex] = wrappingReactRender;
  //     return true;
  //   }

  //   return false;
  // };

  const getAnonymousFunction = (codeToRun) => {
    console.log("get anonymous function running;;", codeToRun);
    return new Function("React", "render", "require", generate(codeToRun));
  };

  const render = (node) => {
    console.log("THE NODE;;;", node);
    console.log("THE EL;;;", domEl);
    ReactDOM.render(node, domEl);
  };

  const require = (moduleName) => {
    return moduleResolver(moduleName);
  };

  const beginParsing = (code) => {
    console.log("parsing code", code);
    try {
      //let tsc = transpileCode(code);
      let ast = convertCodeToAST(transpileCode(code));
      // let ast = convertCodeToAST(code);
      let nodeSearchRes = searchNode(ast);
      console.log("TheNODEsearchRes;;;", nodeSearchRes);
      // setWrappingRender(ast, nodeSearchRes);
      return getAnonymousFunction(ast);
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
