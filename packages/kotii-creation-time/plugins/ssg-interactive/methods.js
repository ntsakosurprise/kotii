/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
const methods = {};
import fs from "fs";
import path, { resolve } from "path";
import { rejects } from "assert";
import { renderToStaticMarkup } from "react-dom/server";
import { InteractionProvider } from "kotii-components";
import babel from "@babel/core";
import babelGenerate from "@babel/generator";
import parser from "@babel/parser";
import template from "@babel/template";

import babelTraverse from "@babel/traverse";
import * as t from "@babel/types";
const traverse = babelTraverse.default;
const generate = babelGenerate.default;
const setTestVar = () => {};
import { parseExpression } from "@babel/parser";

methods.init = function () {
  this.listens({
    "generate-ssg-interactivity": this.handleStaticInteractivity.bind(this),
  });
};
methods.handleStaticInteractivity = function (data) {
  const self = this;
  const pao = self.pao;
  const { payload } = data;
  const { type = "react", Page, view } = payload;
  console.log("HANDLE STATIC INTERACTIVE", data);

  if (!self?.REACT_PROXIED) self.createReactProxy();

  // self.startPreRenderWork(view);
  self
    .extractPageInteractiveParts(Page, type)
    .then(function (parts) {
      self.debug("THE GENERATE PAGE JS", parts, self.__STATIC_RUNTIME_STATE);
      if (!parts?.interactions)
        return data.callback(null, { html: parts.html });

      self
        .generatePageJs(parts.interactions)
        .then((results) => {
          self.__STATIC_RUNTIME_STATE = {};
          data.callback(null, {
            html: parts.html,
            pageJs: results.pageJs,
          });
        })
        .catch((error) => {
          self.debug("ERROR GENRATING JS", error);
        });
    })
    .catch((err) => {
      self.debug("RENDERAPP REJECTED", err);
      data.callback(err);
    });
};
methods.extractPageInteractiveParts = function (Page, vendorType) {
  const self = this;

  console.log("THE EXTRACT TREE PAGE", Page, typeof Page);
  return new Promise((resolve, rejects) => {
    if (vendorType === "react") {
      // let jsxTree = React.createElement(Page)
      // let treeFromPage = jsxTree()
      // console.log("THE EXTRACT TREE JSX", treeFromPage)

      self.thisPageInteractions = [];

      let pageElement;
      try {
        pageElement = self.normalizeToReactElement(Page);
      } catch (err) {
        console.log("THE PAGE ELEMENT CHECK ERROR", err);
      }
      // let tree = self.extractForReactPage();
      // console.log("THE EXTRACT TREE", ReactRenderTimeInterceptor);
      // let html = renderToStaticMarkup(
      //   <ReactRenderTimeInterceptor>{pageElement}</ReactRenderTimeInterceptor>
      // );
      // console.log("THIS ELEMENT INTERACTIONS", self.thisPageInteractions);
      // console.log("THE EXTRACT HTMLE", html);
      // resolve(html);

      // console.log("THE EXTRACT TREE", ReactRenderTimeInterceptor);
      let html = renderToStaticMarkup(
        <InteractionProvider interactions={self.thisPageInteractions}>
          {pageElement}
        </InteractionProvider>
        // React.createElement(
        //   InteractionProvider,
        //   { interactions: self.thisPageInteractions },
        //   pageElement
        // )
      );
      console.log("THIS ELEMENT INTERACTIONS", self.thisPageInteractions);
      console.log("THE EXTRACT HTMLE", html);
      if (self.thisPageInteractions.length > 0) {
        resolve({ html, interactions: self.thisPageInteractions });
      } else {
        resolve({ html });
      }
    }
  });
};
methods.generatePageJs = function (interactions) {
  const self = this;

  return new Promise((resolve, reject) => {
    let processedInteractions = interactions.map((interaction) => {
      const { id, events } = interaction;
      let processedEvents = events.map((event) => {
        self.debug("THE EVENT RAW STRING", event.code);
        let sourceAst = parser.parse(event.code, {
          sourceType: "module",
        });
        self.eventsSourceAst(sourceAst);

        let changedSource = generate(sourceAst).code;
        console.log("THE CHANGED SOURCE", changedSource);
        return `document.querySelector('[data-interactive-id="${id}"]').addEventListener('${event.name}', ${changedSource});`;
      });
      return processedEvents.join("\n");
    });

    resolve({ pageJs: processedInteractions.join("\n") });
  });
};

methods.createReactProxy = function () {
  const self = this;
  const useState = self.ReactStateCapture();

  // const ReactProxy = React;

  // global.React = {
  //   ...ReactProxy,
  //   useState: useState.bind(self),
  // };
  global.__useState = useState.bind(self);
  self.REACT_PROXIED = true;
};

methods.ReactStateCapture = function () {
  const self = this;
  console.log("REACT STATE CAPTURE");
  self.__STATIC_RUNTIME_STATE = {};
  return (state, stateName) => {
    console.log(
      "THE REACT STATE",
      state,
      stateName,
      self,
      self.__STATIC_RUNTIME_STATE
    );
    self.__STATIC_RUNTIME_STATE[`${stateName}`] = state;
    console.log("SELF STATIC", self.__STATIC_RUNTIME_STATE);
    return [state, () => {}];
  };
};

methods.eventsSourceAst = function (eventAst) {
  const self = this;

  self.debug("THE EVENTS SOURCE", self.__STATIC_RUNTIME_STATE);

  // traverse(eventAst, {

  //   Identifier(path) {
  //     self.debug("Identfier",path.node.name)
  //     if (self.__STATIC_RUNTIME_STATE[path.node.name]) {
  //       path.replaceWith(
  //         t.memberExpression(
  //           t.identifier("__STATE__"),
  //           t.identifier(self.__STATIC_RUNTIME_STATE[path.node.name])
  //         )
  //       );
  //     }
  //   },
  //   CallExpression(path) {
  //      self.debug("CallExpression",path.node.name)
  //     const name = path.node.callee.name;
  //     if (self.__STATIC_RUNTIME_STATE[name]) {
  //       path.replaceWith(
  //         t.assignmentExpression(
  //           "=",
  //           t.memberExpression(
  //             t.identifier("__STATE__"),
  //             t.identifier(self.__STATIC_RUNTIME_STATE[name])
  //           ),
  //           path.node.arguments[0]
  //         )
  //       );
  //     }
  //   },
  // });
};

methods.dataToHtmlConnection = function () {
  const self = this;
};
methods.modifyUseStateCallsAst = function (componentAst) {
  const self = this;

  self.debug("MODIFY RUNNING");

  traverse(componentAst, {
    VariableDeclarator(path) {
      const id = path.node.id;
      const init = path.node.init;

      if (
        t.isArrayPattern(id) &&
        id.elements.length === 2 &&
        t.isCallExpression(init) &&
        t.isIdentifier(init.callee, { name: "useState" })
      ) {
        const stateName = id.elements[0].name;

        path
          .get("init")
          .replaceWith(
            t.callExpression(t.identifier("useState"), [
              init.arguments[0],
              t.stringLiteral(stateName),
            ])
          );
      }
    },
  });
};
methods.getJsxDataBindingsFromAst = function (componentAst) {
  const self = this;

  self.bindings = [];

  self.debug("GET JSX DATA RUNNING");

  traverse(componentAst, {
    JSXExpressionContainer(path) {
      const expr = path.node.expression;

      if (t.isIdentifier(expr)) {
        self.bindings.push({ type: "state", name: expr.name, path });
      }
      if (t.isMemberExpression(expr)) {
        self.bindings.push({
          type: "member",
          object: expr.object.name,
          property: expr.property.name,
          path,
        });
      }

      if (t.isBinaryExpression(expr)) {
        self.bindings.push({ type: "expression", code: expr, path });
      }

      if (t.isCallExpression(expr)) {
        self.bindings.push({ type: "array-map", code: expr, path });
      }

      if (t.isLogicalExpression(expr)) {
        self.bindings.push({ type: "conditional", code: expr, path });
      }
    },
  });
  self.debug("GET BINDIINGS", self.bindings);
};

methods.getStateUpdater = function () {
  const self = this;

  self.bindings = [];

  return function (updateState) {
    console.log("Updater executes", updateState);
    if (updateState) return "";
    document.querySelectorAll(`[data-bind^="${updateState}"]`).forEach((el) => {
      const path = el.dataset.bind.split(".");
      let value = __STATE__;
      path.forEach((k) => (value = value[k]));

      if ("value" in el) el.value = value;
      else el.textContent = value;
    });

    document.querySelectorAll("[data-cond]").forEach((el) => {
      el.style.display = eval(el.dataset.if) ? "" : "none";
    });
  };
};

methods.createBindElementsFromBindList = function (bindList = []) {
  const self = this;

  bindList.forEach((b) => {
    if (b.type === "expression") {
      const span = t.jsxElement(
        t.jsxOpeningElement(
          t.jsxIdentifier("span"),
          [
            t.jsxAttribute(
              t.jsxIdentifier("data-bind"),
              t.stringLiteral(self.__STATIC_RUNTIME_STATE)
            ),
          ],
          false
        ),
        t.jsxClosingElement(t.jsxIdentifier("span")),
        [t.jsxText(self.__STATIC_RUNTIME_STATE[b.name])]
      );
      b.path.replaceWith(span);
    }
  });
};
methods.getComponentFileContentsAst = function (componentFilePath) {
  const self = this;
  const pao = self.pao;
  const readFileSync = pao.pa_readFileSync;

  const fileContents = readFileSync(componentFilePath);
  let ast = parser.parse(fileContents, {
    sourceType: "module",
    plugins: ["jsx", "dynamicImports"],
  });
  return ast;
};
methods.startPreRenderWork = function (view) {
  const self = this;
  const { componenentSourcePath } = view;
  let ast = self.getComponentFileContentsAst(
    `/Users/surprisemashele/Documents/KOTII-TESTING-AREA/prod-test/src/pages/index.jsx`
  );
  self.modifyUseStateCallsAst(ast);
  self.getJsxDataBindingsFromAst(ast);
  self.createBindElementsFromBindList();
};
methods.reactRenderTimeInterceptor = function ({ children }) {
  const self = this;
  console.log("REACT RENDER TIME", self.thisPageInteractions);

  return self.interactionsExtractor(children, self.thisPageInteractions);
};
methods.interactionsExtractor = function (
  element,
  idCounter = 0,
  interactions = []
) {
  const self = this;

  // Handle arrays (React.Children.map may produce them)
  if (Array.isArray(element)) {
    console.log("COMPONENT IS ARRAY", element);
    return element.map((el) =>
      self.interactionsExtractor(el, idCounter, interactions)
    );
  }

  // Not a React element → return as-is (string, number, null)
  if (!React.isValidElement(element)) {
    console.log("IS NOT A VALID ELEMENT");
    return element;
  }

  if (typeof element.type === "function") {
    console.log("FUNCTION ELEMENT PROPS", element.props);
    return React.cloneElement(
      element,
      element.props,
      React.Children.map(element.props.children, (child) =>
        self.interactionsExtractor(child, idCounter, interactions)
      )
    );
  }

  const elementProps = { ...element.props };
  console.log("THE ELEMENT PROPS", elementProps);

  if (elementProps.children) {
    elementProps.children = React.Children.map(
      elementProps.children,
      (child) => {
        console.log("THE ELEMENT CHILD", child, "props", child?.props);
        return self.interactionsExtractor(child, idCounter, interactions);
      }
    );
  }
  console.log("THE DATA INTERACTIVE", elementProps["data-interactive"]);

  if (elementProps["data-interactive"]) {
    console.log("MATCH.INTER");
    const elId = `interactive-${idCounter++}`;
    Object.keys(elementProps).forEach((key) => {
      if (key.startsWith("on")) {
        const event = key.slice(2).toLowerCase();
        const code = elementProps[key].toString();
        interactions.push({ id: elId, event, code });
        delete elementProps[key]; // Remove React event
      }
    });
    elementProps["data-interactive-id"] = elId;
    delete elementProps["data-interactive"];
  }

  return React.cloneElement(element, elementProps);
};

methods.extractForReactPage = function (element) {
  const self = this;
};
methods.normalizeToReactElement = function (input) {
  // Already a React element → use as-is
  if (React.isValidElement(input)) {
    return input;
  }

  // Component function → create element
  if (typeof input === "function") {
    return React.createElement(input);
  }

  throw new Error(
    "extractPageInteractiveParts expected a React element or component function"
  );
};

export default methods;
