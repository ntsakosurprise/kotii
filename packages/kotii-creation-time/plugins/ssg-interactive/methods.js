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
import { pathToFileURL } from "url";
let MODULE_GRAPH_FOR_STATIC_GENERATION = null;
let RESOLVED_JSX_MODULES = null;
let PACKAGES_FILES = null;

// console.log("THE MODULE GRAPH FOR STATIC", MODULE_GRAPH_FOR_STATIC_GENERATION)

methods.init = function () {
  this.listens({
    "generate-ssg-interactivity": this.handleStaticInteractivity.bind(this),
  });
};
methods.handleStaticInteractivity = async function (data) {
  const self = this;
  const pao = self.pao;
  const { payload } = data;
  const { type = "react", Page, view } = payload;
  console.log("HANDLE STATIC INTERACTIVE", view);

  if (!self?.REACT_PROXIED) self.createReactProxy();
  self.__STATIC_RUNTIME_STATE = {};
  self.__STATE_SETTERS = {};

  self.debug("THE GLOBAL STATIC MODULE GRAPH");
  self.debug("THE GLOBAL TEST", global.TEST_GLOBAL_USE);

  if (!MODULE_GRAPH_FOR_STATIC_GENERATION) {
    let STATIC_RESOURCES = await self.loadPagesModuleGraph(
      "virtual:static-module-graph"
    );
    MODULE_GRAPH_FOR_STATIC_GENERATION =
      STATIC_RESOURCES.MODULE_GRAPH_FOR_STATIC_GENERATION;
    RESOLVED_JSX_MODULES = STATIC_RESOURCES.RESOLVED_JSX_MODULES;
    PACKAGES_FILES = STATIC_RESOURCES.PACKAGES_FILES;
  }

  console.log(
    "THE ABSOLUTE PATH.SSG",
    MODULE_GRAPH_FOR_STATIC_GENERATION,
    RESOLVED_JSX_MODULES,
    PACKAGES_FILES
  );
  const url = view.componentSourcePath;
  console.log("THE URL", url);
  const fileUrl = pathToFileURL(url).href;
  console.log("THE FILE URL", fileUrl);
  const { externals, imports } = self.getThisPageResourcesGraph(fileUrl);
  self.__STATIC_EXTERNALS_STATE = externals;
  self.__IMPORTS__ = imports;
  self.debug("MODULE EXTERNALS FOR STATIC", self.__STATIC_EXTERNALS_STATE);
  self.debug("THE APP IMPORTS", self.__IMPORTS__);
  self.createExternalsState();
  self.debug("THE APP EVENT EXTERNALS", self.__EXTERNALS__);

  // self.startPreRenderWork(view);
  self
    .extractPageInteractiveParts(Page, type)
    .then(function (parts) {
      self.debug("THE GENERATE PAGE JS", self.__EXTERNALS__);
      if (!parts?.interactions)
        return data.callback(null, { html: parts.html });

      self
        .generatePageJs(parts.interactions)
        .then((results) => {
          data.callback(null, {
            html: parts.html,
            pageJs: `var __STATE__=${JSON.stringify(
              self.__STATIC_RUNTIME_STATE
            )}\n var __EXTERNALS__= {}\n ${self.normalizeExternalsForBrowser(
              self.restoreFunctionsForRuntime(self.__EXTERNALS__)
            )}\n ${self.getStateUpdater()} \n ${results.pageJs}`,
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
        // <InteractionProvider interactions={self.thisPageInteractions}>
        //   {pageElement}
        // </InteractionProvider>
        React.createElement(
          InteractionProvider,
          { interactions: self.thisPageInteractions },
          pageElement
        )
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
        return `document.querySelector('[data-interactive-id="${id}"]').addEventListener('${
          event.name
        }', ${changedSource.replace(/;/g, "")})`;
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
  self.__STATE_SETTERS = {};
  return (state, stateName, stateSetter) => {
    console.log(
      "THE REACT STATE",
      state,
      stateName,
      self,
      self.__STATIC_RUNTIME_STATE
    );
    self.__STATIC_RUNTIME_STATE[`${stateName}`] = state;
    self.__STATE_SETTERS[stateSetter] = stateName;
    console.log("SELF STATIC", self.__STATIC_RUNTIME_STATE);
    return [state, () => {}];
  };
};

methods.eventsSourceAst = function (eventAst) {
  const self = this;

  self.debug("THE EVENTS SOURCE", self.__STATIC_RUNTIME_STATE);

  traverse(eventAst, {
    Identifier(path) {
      const name = path.node.name;

      // Not a tracked state variable
      // console.log("THE CURRENT NAME",name)
      if (
        !self.__STATIC_RUNTIME_STATE[name] &&
        !self.__STATIC_EXTERNALS_STATE[name]
      )
        return;

      //  Skip identifiers inside __STATE__.x (prevents double rewrite)
      if (
        path.parentPath.isMemberExpression() &&
        path.parentPath.get("object").isIdentifier({ name: "__STATE__" })
      ) {
        return;
      }

      // Skip declaration site
      const binding = path.scope.getBinding(name);
      if (binding && binding.identifier === path.node) return;

      // Skip property keys: obj.foo
      if (
        path.parentPath.isMemberExpression() &&
        path.parentKey === "property" && // ✅ CORRECT
        !path.parent.computed
      ) {
        return;
      }

      if (self.__STATIC_RUNTIME_STATE[name]) {
        self.replaceIdentifier(path, "__STATE__", name);
      } else if (self.__STATIC_EXTERNALS_STATE) {
        self.replaceIdentifier(path, "__EXTERNALS__", name);
      }
    },

    CallExpression(path) {
      const callee = path.node.callee;
      if (!t.isIdentifier(callee)) return;
      self.debug("THE CALL EXPRESSION", callee);

      if (self.__STATE_SETTERS[callee.name]) {
        const newAssignment = t.assignmentExpression(
          "=",
          t.memberExpression(
            t.identifier("__STATE__"),
            t.identifier(self.__STATE_SETTERS[callee.name])
          ),
          path.node.arguments[0]
        );

        const updateCall = t.expressionStatement(
          t.callExpression(t.identifier("stateUpdater"), [
            t.stringLiteral(self.__STATE_SETTERS[callee.name]),
          ])
        );

        // Replace original setter call with two statements
        path.replaceWithMultiple([
          t.expressionStatement(newAssignment),
          updateCall,
        ]);

        return;
      }
    },
  });
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

  return function stateUpdater(updateState) {
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

methods.getThisPageResourcesGraph = function (entryFile) {
  const self = this;
  const visited = new Set();
  const externals = {};
  const imports = {};

  self.debug("THE ENTRY FILE", entryFile, MODULE_GRAPH_FOR_STATIC_GENERATION);

  function walk(file) {
    if (visited.has(file)) return;
    visited.add(file);

    const mod = MODULE_GRAPH_FOR_STATIC_GENERATION.get(file);
    if (!mod) return;

    Object.entries(mod.externals).forEach(([key, value]) => {
      console.log("THE EXTERNAL ENTRY", key, value);

      if (!(key in externals)) {
        externals[key] = value;
      }
    });

    Object.entries(mod.imports).forEach(([key, value]) => {
      if (!(key in imports)) imports[key] = value;
    });

    mod.deps.forEach((dep) => {
      if (RESOLVED_JSX_MODULES[dep]) {
        let dependencyBySpecifier = RESOLVED_JSX_MODULES[dep];

        let dependencyUrl = dependencyBySpecifier.url;
        walk(dependencyUrl);
        // let dependencyExternals =
        //   MODULE_GRAPH_FOR_STATIC_GENERATION.get(dependencyUrl)?.externals || null;
        // console.log(
        //   "DepByS",
        //   dependencyBySpecifier,
        //   "DepUrl",
        //   dependencyUrl,
        //   "DepExternals",
        //   dependencyExternals
        // );
        // if (
        //   dependencyExternals &&
        //   Object.keys(dependencyExternals).length > 0
        // ) {
        //   console.log("PING");
        //   walk(dependencyUrl);
        // } else {
        //   walk(dependencyUrl);
        // }
      }
    });
  }

  walk(entryFile);

  return { externals, imports };
};

// const homePageGraph = buildPageGraph("Home.jsx");

// console.log("Merged externals:", Object.keys(homePageGraph.externals));
// console.log("Merged imports:", homePageGraph.imports);

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
methods.loadPagesModuleGraph = function (toImport, all = false, check = false) {
  const self = this;
  const pao = self.pao;
  const loadFile = pao.pa_loadFile;
  const loadFileSync = pao.pa_loadFileSync;
  // self.debug("TIIMPORT", toImport);
  return new Promise((resolve, reject) => {
    loadFile(toImport, all, check)
      .then((imported) => {
        // self.debug("VIRTUAL Module has successfully been imported:", imported);
        resolve(imported);
      })
      .catch((err) => {
        self.debug(
          `importing VIRTUAL module:${toImport}, has failed with an error:${err}`
        );
        reject(err);
      });
  });
};
methods.replaceIdentifier = function (path, jsStateID, state) {
  console.log("REPLACE ID", jsStateID, state);
  path.replaceWith(
    t.memberExpression(t.identifier(jsStateID), t.identifier(state))
  );
};
methods.createExternalsState = function () {
  const self = this;
  self.__EXTERNALS__ = {};

  Object.entries(self.__STATIC_EXTERNALS_STATE).forEach(([key, wrapper]) => {
    console.log("KEY.WRAPER", key, wrapper);
    if (typeof wrapper == "object") {
      const ast = wrapper?.value || wrapper?.factory; // ← IMPORTANT
      const { code } = generate(ast);
      self.__EXTERNALS__[key] = code;
    } else {
      if (self.__IMPORTS__[key]) {
        console.log("THE EXTERNAL IS IMPORTS", key, self.__IMPORTS__[key]);
        let importedOwningPackage = PACKAGES_FILES[self.__IMPORTS__[key]];
        console.log("THE OWNING PACKAGE", importedOwningPackage);
      }
    }
  });
};
methods.restoreFunctionsForRuntime = function (externals) {
  const runtimeExternals = {};

  for (const [key, value] of Object.entries(externals)) {
    if (typeof value !== "string") {
      runtimeExternals[key] = value;
      continue;
    }

    const trimmed = value.trim();

    // 🔥 FACTORY — DO NOT EVAL
    if (
      trimmed.startsWith("() =>") ||
      trimmed.startsWith("((") || // defensive
      trimmed.startsWith("function")
    ) {
      runtimeExternals[key] = {
        __factory__: true,
        source: trimmed,
      };
      continue;
    }

    // 🔥 JS literals (object/array)
    if (
      (trimmed.startsWith("{") && trimmed.endsWith("}")) ||
      (trimmed.startsWith("[") && trimmed.endsWith("]"))
    ) {
      runtimeExternals[key] = eval(`(${trimmed})`);
      continue;
    }

    // 🔥 primitive
    runtimeExternals[key] = trimmed.replace(/^"|"$/g, "");
  }

  return runtimeExternals;
};

methods.normalizeExternalsForBrowser = function (runtimeExternals) {
  const self = this;

  // const externalsCode = Object.entries(runtimeExternals)
  // .map(([key, value]) => {
  //   if (typeof value === "function") {
  //     return `__EXTERNALS__.${key} = ${value.toString()};`;
  //   } else {
  //     return `__EXTERNALS__.${key} = ${JSON.stringify(value)};`;
  //   }
  // })
  // .join("\n");
  // return externalsCode

  const externalsCode = Object.entries(runtimeExternals)
    .map(([key, value]) => {
      console.log("KEY, VALUE.EXTERNALS", key, value);
      if (value?.factory) {
        return `
          __EXTERNALS__.${key} = (function() {
            return (${value.factory});
          })();
          `;
      }

      if (typeof value === "function") {
        return `__EXTERNALS__.${key} = ${value.toString()};`;
      }

      return `__EXTERNALS__.${key} = ${JSON.stringify(value)};`;
    })
    .join("\n");

  return externalsCode;
};

export default methods;
