import React from "react";
import { transform } from "@babel/standalone";
import Acorn from "acorn";
import objectPath from "object-path";
import { generate } from "escodegen";
const textEditor = (domEl, moduleResolver = () => {}) => {
  const transpileCode = (code) => {
    return transform(code);
  };

  const convertCodeToAST = (code) => {
    return Acorn.parse(code, { sourceType: "module" });
  };

  const isReactNode = (node) => {
    const nodeType = node.type;
    const nodeObjectName = objectPath(
      node,
      "expressionStatement.callee.object.name"
    );
    const nodeFunc = objectPath(
      node,
      "expressionStatement.callee.object.property"
    );

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

  const setWrappingRender = (ast, reactNode) => {
    if (reactNode) {
      const reactNodeIndex = ast.body.indexOf(reactNode);
      const createElSrc = generate(rnode).slice(0, -1);
      const wrappingReactRender = Acorn.parse(`render(${createElSrc})`);
      ast.body[reactNodeIndex] = wrappingReactRender;
      return true;
    }

    return false;
  };

  const getAnonymousFunction = (codeToRun) => {
    return new Function("React", "render", "render", generate(codeToRun));
  };

  const render = (node) => {
    ReactDOM.render(node, domEl);
  };

  const require = (moduleName) => {
    return moduleResolver(moduleName);
  };

  const beginParsing = (code) => {
    try {
      //let tsc = transpileCode(code);
      let ast = convertCodeToAST(transpileCode(code));
      let nodeSearchRes = searchNode(ast);
      setWrappingRender(ast, nodeSearchRes);
      return getAnonymousFunction(ast);
    } catch (parseError) {}
  };

  return {
    // returns transpiled code in a wrapper function which can be invoked later
    compile(code) {
      return beginParsing(code);
    },

    // compiles and invokes the wrapper function
    run(code) {
      this.compile(code)(React, render, require);
    },
  };
};

export default textEditor;

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
