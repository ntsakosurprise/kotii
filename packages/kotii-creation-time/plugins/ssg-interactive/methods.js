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
import crypto from "crypto";

import babelTraverse from "@babel/traverse";
import * as t from "@babel/types";
const traverse = babelTraverse.default;
const generate = babelGenerate.default;
const setTestVar = () => {};
import { parseExpression } from "@babel/parser";
import { fileURLToPath, pathToFileURL } from "url";
import { exportDefaultDeclaration } from "@babel/types";
import { program } from "@babel/types";
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
  const { externals, imports, reactOptHooks } =
    self.getThisPageResourcesGraph(fileUrl);
  self.__STATIC_EXTERNALS_STATE = externals;
  self.__IMPORTS__ = imports;
  self.__REACT_OPT_HOOKS__ = reactOptHooks;
  self.debug("MODULE EXTERNALS FOR STATIC", self.__STATIC_EXTERNALS_STATE);
  self.debug("THE APP IMPORTS", self.__IMPORTS__);
  self.debug("THE APP OPTS", self.__REACT_OPT_HOOKS__);
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
            )}\n var __REACT_OPT_HOOKS__ = ${JSON.stringify(
              self.__REACT_OPT_HOOKS__
            )}\n
             ${self.createPackagesRequires()}
             ${self.getStateUpdater()} \n ${results.pageJs}\n
             ${self.getFactoryCreator()}\n
             ${self.getFactoriesRunner()}\n
             runFactories()
            `,
            pageJsPackages: self.__PACKAGES_CODE__,
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
  console.log("THE INTERACTIONS", interactions);

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

  self.debug(
    "THE EVENTS SOURCE",
    self.__STATIC_RUNTIME_STATE,
    "THE SETTERS",
    self.__STATE_SETTERS,
    "STATIC EXTERNALS",
    self.__STATIC_EXTERNALS_STATE
  );

  traverse(eventAst, {
    Identifier(path) {
      const name = path.node.name;

      // Not a tracked state variable
      // console.log("THE CURRENT NAME",name)
      if (self.__STATE_SETTERS[name]) {
        const { newAssignment, updateCall } = self.createUpdaterFromReactSetter(
          path,
          name,
          true
        );
        //  console.log("WRAPPED BELLOW")
        const wrappedFunction = t.functionExpression(
          null, // anonymous
          [t.identifier("param")], // no params
          t.blockStatement([newAssignment, updateCall])
        );
        path.replaceWith(wrappedFunction);
        path.skip();
        return;
      }
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
      // if (binding && binding.identifier === path.node) return;
      if (binding) {
        return;
      }
      // console.log("ID WITH BIND",name)
      // Skip property keys: obj.foo
      if (
        path.parentPath.isMemberExpression() &&
        path.parentKey === "property" && // ✅ CORRECT
        !path.parent.computed
      ) {
        // console.log("ID IN PROPERTY",name)
        return;
      }
      // console.log("IDENTIFIER IN QUESTION", name)

      if (self.__STATIC_RUNTIME_STATE[name]) {
        self.replaceIdentifier(path, "__STATE__", name);
      } else if (self.__STATIC_EXTERNALS_STATE && !self.__IMPORTS__[name]) {
        console.log("REPLACING FOR NAME:EXTERNAL", name);
        self.replaceIdentifier(path, "__EXTERNALS__", name);
      }
    },

    CallExpression(path) {
      const callee = path.node.callee;
      if (!t.isIdentifier(callee)) return;
      // self.debug("THE CALL EXPRESSION", callee);

      if (self.__STATE_SETTERS[callee.name]) {
        const { newAssignment, updateCall } = self.createUpdaterFromReactSetter(
          path,
          callee.name
        );

        // Replace original setter call with two statements
        path.replaceWithMultiple([
          t.expressionStatement(newAssignment),
          updateCall,
        ]);
        // console.log("Replaced CALL EXPRESSION OF NAME", callee.name)

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
    // if (updateState) return "";
    document.querySelectorAll(`[data-bind^="${updateState}"]`).forEach((el) => {
      const path = el.dataset.bind.split(".");

      let value = __STATE__;
      let shouldUpdate = true;
      path.forEach((k) => {
        console.log("THE CURRENT KEY VALUE", k, value[k]);
        console.log("THE VALUE BEFORE", value);

        if (!value[k]) {
          shouldUpdate = false;
        } else {
          value = value[k];
        }
        console.log("THE VALUE AFTER", value);
      });

      if (shouldUpdate) {
        if ("value" in el) el.value = value;
        else el.textContent = value;
      }
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
  const reactOptHooks = [];

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

    mod?.reactOptHooks.forEach((hoodIdName) => {
      if (!reactOptHooks.includes(hoodIdName)) reactOptHooks.push(hoodIdName);
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

  return { externals, imports, reactOptHooks };
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
  const vendorScripts = null;
  self.__EXTERNALS__ = {};
  self.__PACKAGES_CODE__ = [];
  self.__NEEDED_IMPORTS__ = [];
  self.__MODULES_IMPORTS_MAP__ = {};
  self.info("THE STATIC EXTERNALS", self.__IMPORTS__);

  Object.entries(self.__STATIC_EXTERNALS_STATE).forEach(([key, wrapper]) => {
    console.log("KEY.WRAPER", key, wrapper);
    if (typeof wrapper == "object") {
      const ast = wrapper?.value || wrapper?.factory; // ← IMPORTANT
      const { code } = generate(ast);
      self.__EXTERNALS__[key] = code;
    } else {
      if (self.__IMPORTS__[key]) {
        console.log("THE EXTERNAL IS IMPORTS", key, self.__IMPORTS__[key]);
        let importedOwningPackage =
          PACKAGES_FILES[self.__IMPORTS__[key].source];
        console.log("THE OWNING PACKAGE", importedOwningPackage);
        let currentPackageBrowserCode = self.processPackageForBrowser(
          self.__IMPORTS__[key].source,
          importedOwningPackage,
          [key]
        );
        self.__NEEDED_IMPORTS__.push({
          importSpecifier: key,
          moduleSpecifier: currentPackageBrowserCode.name,
          importedName: self.__IMPORTS__[key].importedName,
        });
        self.__PACKAGES_CODE__.push({
          code: currentPackageBrowserCode.code,
          packageName: self.__IMPORTS__[key].source,
          fileName: `${self.__IMPORTS__[key].source}.js`,
        });
      }

      self.__MODULES_IMPORTS_MAP__ = {};
    }
  });

  self.__PACKAGES_CODE__ = [
    { code: self.modulesBrowserSkeleton() },
    ...self.__PACKAGES_CODE__,
  ];
};
methods.restoreFunctionsForRuntime = function (externals) {
  const self = this;
  const runtimeExternals = {};

  for (const [key, value] of Object.entries(externals)) {
    if (typeof value !== "string") {
      runtimeExternals[key] = value;
      continue;
    }

    console.log("THE RESTOR FUNCTION FOR RUN TIME VALUE", value);
    const trimmed = value.trim();

    const isArrowFunction =
      /^\s*(async\s*)?(\([^)]*\)|[a-zA-Z_$][\w$]*)\s*=>/.test(trimmed);

    const isFunctionDeclaration = /^\s*(async\s*)?function\b/.test(trimmed);

    if (isArrowFunction || isFunctionDeclaration) {
      console.log("THE VALUE ARROW FUNCTION");
      let sourceAst = parser.parse(trimmed, {
        sourceType: "module",
      });

      console.log("FACTORY SOURCE AST restore", sourceAst);

      self.eventsSourceAst(sourceAst);

      let changedSource = generate(sourceAst).code;
      console.log("CHANGED FACTORY SOURCE", changedSource);

      runtimeExternals[key] = {
        __factory__: true,
        source: changedSource,
      };

      continue;
    }

    // if (
    //   trimmed.startsWith("() =>") ||
    //   trimmed.startsWith("((") || // defensive
    //   trimmed.startsWith("function")
    // ) {
    //   let sourceAst = parser.parse(trimmed, {
    //       sourceType: "module",
    //     });

    //   console.log("FACTORY SOURCE AST", sourceAst)

    //   self.eventsSourceAst(sourceAst)

    //   let changedSource = generate(sourceAst).code
    //   console.log("CHANGED FACTORY SOURCE", changedSource)

    //   runtimeExternals[key] = {
    //     __factory__: true,
    //     source: changedSource
    //   };
    //   continue;
    // }

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
methods.createUpdaterFromReactSetter = function (
  path,
  name,
  isSetterReference = false
) {
  const self = this;

  const valueNode =
    path.node.arguments && path.node.arguments.length > 0
      ? path.node.arguments[0]
      : t.identifier("param");
  const newAssignment = t.assignmentExpression(
    "=",
    t.memberExpression(
      t.identifier("__STATE__"),
      t.identifier(self.__STATE_SETTERS[name])
    ),
    valueNode
  );

  const updateCall = t.expressionStatement(
    t.callExpression(t.identifier("stateUpdater"), [
      t.stringLiteral(self.__STATE_SETTERS[name]),
    ])
  );

  return {
    newAssignment: isSetterReference
      ? t.expressionStatement(newAssignment)
      : newAssignment,
    updateCall,
  };
};

methods.processPackageForBrowser = function (
  packageName,
  packageFiles,
  entryRequiredImports
) {
  const self = this;

  console.log("THE PACKAGE FILES", packageName, packageFiles);

  const packageContext = {
    name: packageName,
    entry: packageFiles[packageName],
    modules: new Map(),
    entryRequiredImports,
  };

  // const moduleType = self.detectModuleTypeSync(packageContext.entry)

  let standingTree = self.collectPackageResourcesForTreeShake(
    packageContext.entry,
    packageContext,
    packageFiles,
    packageName
  );
  if (standingTree) {
    let browserModulesWrapper = "";
    let mainFileName = null;

    for (let [moduleID, module] of packageContext.modules) {
      console.log(
        "MODULE ID IN CONTEXT",
        module.id,
        "SPECIFIER",
        module.moduleSpecifier
      );
      self.convertESMToCommonJS(module.ast);
      let updatedSource = generate(module.ast).code;
      //  let uniqueFileID = self.createUniqueModuleId(packageContext.name, updatedSource)
      //  let uniqueFileID = self.createUniqueModuleId(packageContext.name, module.source)

      if (!mainFileName) mainFileName = module.moduleSpecifier;

      browserModulesWrapper += `
     __modules__["${module.moduleSpecifier}"] = function(module, exports, __require__) {
       ${updatedSource}
      }`;
    }
    //  browserModulesWrapper += `\nwindow.__modules__ = __modules__\n window.__require__ = __require__`
    //  browserModulesWrapper += `\n const __entry__ = __require__("${mainFileName}")\n export const ${entryRequiredImports[0]} = __entry__.Chain`

    console.log("THE BROWSER READY CODE", browserModulesWrapper);

    return { code: browserModulesWrapper, name: mainFileName };
  }
};

methods.collectPackageResourcesForTreeShake = function (
  fileUrl,
  packageContext,
  packageFiles,
  moduleSpecifier
) {
  const self = this;

  if (packageContext.modules.has(fileUrl)) {
    self.__MODULES_IMPORTS_MAP__[moduleSpecifier] =
      packageContext.modules.get(fileUrl).moduleSpecifier;
    return;
  }
  const fileSource = fs.readFileSync(fileURLToPath(fileUrl), {
    encoding: "utf-8",
  });
  console.log("THE FILE SOURCE", "File url", fileUrl, fileSource);
  const fileSourceAst = parser.parse(fileSource, {
    sourceType: "module",
  });

  let modifiedModuleSpecifier = self.createUniqueModuleId(moduleSpecifier);
  const moduleInfo = {
    id: fileUrl,
    moduleSpecifier: modifiedModuleSpecifier,
    source: fileSource,
    ast: fileSourceAst,
    imports: new Map(),
    exports: new Map(),
    sideEffects: false,
  };
  self.__MODULES_IMPORTS_MAP__[moduleSpecifier] = modifiedModuleSpecifier;
  console.log("THE MODULE IMPORTS AFTER SET", self.__MODULES_IMPORTS_MAP__);

  console.log("THE PACKAGE CONTEXT", fileUrl, moduleInfo);
  packageContext.modules.set(fileUrl, moduleInfo);

  traverse(fileSourceAst, {
    ImportDeclaration(path) {
      console.log("IMPORT PATH", path.node.source.value);
      let importString = path.node.source.value;
      console.log("THE IMPORT STRING", importString);

      //  !moduleInfo.moduleSpecifier ? moduleInfo.moduleSpecifier = importString : ""
      console.log(
        "THE CURRENT FILE COLLECT IMPORT FILE",
        moduleInfo.id,
        "Specifier",
        moduleInfo.moduleSpecifier
      );
      let importedIds = new Set();

      path.node.specifiers.forEach((specifier) => {
        if (t.isImportSpecifier(specifier)) {
          importedIds.add(specifier.imported.name);
        }
        if (t.isImportDefaultSpecifier(specifier)) {
          importedIds.add("default");
        }
        if (t.isImportNamespaceSpecifier) {
          importedIds.add("*");
        }
      });
      let importedFileUrl = packageFiles[importString];
      if (!importedFileUrl) {
        let importedFileUrl = PACKAGES_FILES[importString];
        let packageImportedPackageCode = self.processPackageForBrowser(
          importString,
          PACKAGES_FILES[importString],
          Array.from(importedIds)
        );
        console.log("THE PACKAGE IMPORTED PACKAGE CODE", importString);
        self.__PACKAGES_CODE__.push({
          code: packageImportedPackageCode.code,
          packageName: importString,
          fileName: `${packageImportedPackageCode.name}.js`,
        });
        moduleInfo.imports.set(importedFileUrl, importedIds);
        // self.collectPackageResourcesForTreeShake(importedFileUrl,packageContext,PACKAGES_FILES[importString])
        // importedFileUrl = PACKAGES_FILES[importString][importString]
      } else {
        console.log(
          "THE IMPORTED URL",
          importedFileUrl,
          packageFiles,
          Array.from(importedIds)
        );

        moduleInfo.imports.set(importedFileUrl, importedIds);
        self.collectPackageResourcesForTreeShake(
          importedFileUrl,
          packageContext,
          packageFiles,
          importString
        );
      }
    },

    ExportNamedDeclaration(path) {
      if (path.node.declaration) {
        let declaration = path.node.declaration;
        if (declaration.id) {
          moduleInfo.exports.set(declaration.id.name, declaration);
        }
      }
      path.node.specifiers.forEach((specifier) => {
        moduleInfo.exports.set(specifier.exported.name, specifier);
      });
    },
    ExportDefaultDeclaration(path) {
      moduleInfo.exports.set("default", path.node.declaration);
    },
    Program(path) {
      moduleInfo.sideEffects = path.node.body.some((node) =>
        t.isExpressionStatement(node)
      );
    },
  });

  console.log("THE COLLECT", packageContext.modules);
  self.treeShakeModule(packageContext);
  return true;
};

methods.treeShakeModule = function (packageContext) {
  const self = this;
  const usedExports = new Map();
  console.log("TREE SHAKE", packageContext);

  usedExports.set(packageContext.entry, packageContext.entryRequiredImports);

  let shouldShakeExports = true;

  while (shouldShakeExports) {
    shouldShakeExports = false;

    for (let [moduleId, module] of packageContext.modules) {
      console.log("MODULE ID", moduleId, module);
      let neededExports = usedExports.get(moduleId);
      if (!neededExports) continue;
      console.log("THE MODULE IMPORTS", module.id, module.imports);

      for (let [importedModuleId, importsList] of module.imports) {
        let importsNeeded = new Set();

        for (let neededExport of neededExports) {
          if (importsList.has(neededExport) || importsList.has("*"))
            importsNeeded.add(neededExport);
        }

        if (importsNeeded.size) {
          if (!usedExports.has(importedModuleId)) {
            usedExports.set(importedModuleId, new Set());
          }

          let target = usedExports.get(importedModuleId);
          console.log("THE NEEDED", target);
          for (let needed of importsNeeded) {
            if (!target.has(needed)) {
              target.add(needed);
              shouldShakeExports = true;
            }
          }
        }
      }
    }
  }
  for (let [moduleId, module] of packageContext.modules) {
    if (module.sideEffects) {
      usedExports.set(moduleId, new Set(["*"]));
    }
  }
};

methods.modulesBrowserSkeleton = function () {
  const wrapper = `
     const __modules__ = {}
   const __cache__ = {}
   function __require__(id){
       console.log("Module ID", id)
       console.log("THE MODULES",__modules__)
      if(__cache__[id]) return __cache__[id].exports

      if(!__modules__[id]){
        throw new Error("Module id not found")
      }

      const module = { exports: {} }

      __cache__[id] = module

      __modules__[id](module, module.exports, __require__)

      return module.exports
    }
  `;
  return wrapper;
};

methods.createUniqueModuleId = function (packageName, packageContent) {
  // console.log("UNIQUE NAME PACKAGE", packageName)
  //   const hash = crypto
  //     .createHash("sha256")
  //     .update(packageContent)
  //     .digest("hex")
  //     .slice(0, 8)

  //   const safeName = packageName
  //     .toLowerCase()
  //     .replace(/[^a-z0-9_\-@/]/g, "")

  //   return `pkg:${safeName}:${hash}`

  const parts = packageName.split("/");
  const stack = [];

  for (const part of parts) {
    if (!part || part === ".") continue;

    if (part === "..") {
      stack.pop();
    } else {
      stack.push(part);
    }
  }

  return stack.join("/");
};
methods.createPackagesRequires = function () {
  const self = this;

  let requires = ``;
  self.__NEEDED_IMPORTS__.forEach((currentPackage) => {
    requires += `\n const ${currentPackage.importSpecifier} = __require__("${currentPackage.moduleSpecifier}").${currentPackage.importedName}\n`;
  });

  console.log("THE MODULE REQUIRES", requires);
  return requires;
};

methods.beginVendorCodeGeneration = function (vendors) {
  const self = this;
  const vendorCodeSource = null;

  vendors.forEach(() => {});
};
methods.combineVendorCode = function (vendors) {
  const self = this;
  const vendorCodeSource = null;

  vendors.forEach(() => {});
};

methods.vendorCodeTreeShaking = function (vendors) {
  const self = this;
  const vendorCodeSource = null;

  vendors.forEach(() => {});
};

methods.combileAllPackages = function (vendors) {
  const self = this;
  const vendorCodeSource = null;

  vendors.forEach(() => {});
};

methods.getFactoryCreator = function () {
  return function createFunctionFromString(fnString) {
    const cleaned = fnString.trim().replace(/;$/, "");
    return new Function(`return (${cleaned})`)();
  };
};

methods.getFactoriesRunner = function () {
  return function runFactories() {
    //  Object.entries(__EXTERNALS__).forEach((entry)=>{
    //   let ID  = entry[0]
    //   console.log("THE ENTRIES ENTRY",ID)
    //   if(__EXTERNALS__[ID]["__factory__"]){
    //     console.log("THE FUNCTION VALUE", __EXTERNALS__[ID].source)
    //     __EXTERNALS__[ID] = createFunctionFromString(__EXTERNALS__[ID].source)()
    //     console.log("EXTERNALS AFTER ADD",__EXTERNALS__)
    //   }
    //  })

    const priorityMap = new Map(
      __REACT_OPT_HOOKS__.map((id, index) => [id, index])
    );

    Object.entries(__EXTERNALS__)
      .sort(([idA], [idB]) => {
        const hasA = priorityMap.has(idA);
        const hasB = priorityMap.has(idB);

        // 1️⃣ Non-priority first
        if (hasA !== hasB) {
          return hasA ? 1 : -1;
        }

        // 2️⃣ If both are priority, preserve hook order
        if (hasA && hasB) {
          return priorityMap.get(idA) - priorityMap.get(idB);
        }

        // 3️⃣ Otherwise keep original relative order
        return 0;
      })
      .forEach(([ID, value]) => {
        console.log("THE ENTRIES ENTRY", ID);

        if (value["__factory__"]) {
          console.log("THE FUNCTION VALUE", value.source);
          __EXTERNALS__[ID] = __REACT_OPT_HOOKS__.includes(ID)
            ? createFunctionFromString(value.source)()
            : createFunctionFromString(value.source);
          console.log("EXTERNALS AFTER ADD", __EXTERNALS__);
        }
      });
  };
};
// methods.convertESMToCommonJS = function(ast) {

//   const self = this
//   console.log("THE CURRENT PACKAGE MAPS", self.__MODULES_IMPORTS_MAP__)
//   const state = { exportNames: new Set() };

//   traverse(ast, {
//     Program: {
//       enter(path) {
//         state.exportNames = new Set();
//       },
//       exit(path) {
//         path.unshiftContainer(
//           "body",
//           t.expressionStatement(
//             t.callExpression(
//               t.memberExpression(t.identifier("Object"), t.identifier("defineProperty")),
//               [
//                 t.identifier("exports"),
//                 t.stringLiteral("__esModule"),
//                 t.objectExpression([t.objectProperty(t.identifier("value"), t.booleanLiteral(true))]),
//               ]
//             )
//           )
//         );
//       },
//     },

//     ImportDeclaration(path) {
//       const source = path.node.source.value;
//       console.log("CONVERT SOURCE ID",source)
//       let modifiedSource = self.__MODULES_IMPORTS_MAP__[source] ? self.__MODULES_IMPORTS_MAP__[source] : source
//       const requireCall = t.callExpression(t.identifier("__require__"), [t.stringLiteral(modifiedSource)]);
//       // const declarations = [];

//       // path.node.specifiers.forEach((spec) => {
//       //   if (t.isImportDefaultSpecifier(spec)) {
//       //     declarations.push(
//       //       t.variableDeclarator(spec.local, t.memberExpression(requireCall, t.identifier("default")))
//       //     );
//       //   } else if (t.isImportSpecifier(spec)) {
//       //     declarations.push(t.variableDeclarator(spec.local, t.memberExpression(requireCall, spec.imported)));
//       //   } else if (t.isImportNamespaceSpecifier(spec)) {
//       //     declarations.push(t.variableDeclarator(spec.local, requireCall));
//       //   }
//       // });

//       // path.replaceWith(t.variableDeclaration("const", declarations));

//       const mod = path.scope.generateUidIdentifierBasedOnNode(
//         t.identifier(modifiedSource.replace(/[^a-zA-Z]/g, ""))
//       );

//       const requireDecl = t.variableDeclaration("const", [
//         t.variableDeclarator(mod, requireCall),
//       ]);

//       const declarations = [];

//       path.node.specifiers.forEach((spec) => {
//         if (t.isImportDefaultSpecifier(spec)) {
//           declarations.push(
//             t.variableDeclarator(
//               spec.local,
//               t.memberExpression(mod, t.identifier("default"))
//             )
//           );
//         } else if (t.isImportSpecifier(spec)) {
//           declarations.push(
//             t.variableDeclarator(
//               spec.local,
//               t.memberExpression(mod, spec.imported)
//             )
//           );
//         } else if (t.isImportNamespaceSpecifier(spec)) {
//           declarations.push(
//             t.variableDeclarator(spec.local, mod)
//           );
//         }
//       });

//       path.replaceWithMultiple([
//         requireDecl,
//         t.variableDeclaration("const", declarations),
//       ]);
//     },

//     ExportNamedDeclaration(path) {
//       const { node } = path;

//       if (node.declaration) {
//         const decl = node.declaration;

//         if (t.isVariableDeclaration(decl)) {
//           decl.declarations.forEach((d) => {
//             const name = d.id.name;
//             state.exportNames.add(name);
//             path.insertAfter(
//               t.expressionStatement(
//                 t.assignmentExpression(
//                   "=",
//                   t.memberExpression(t.identifier("exports"), t.identifier(name)),
//                   t.identifier(name)
//                 )
//               )
//             );
//           });
//         }

//         if (t.isFunctionDeclaration(decl) || t.isClassDeclaration(decl)) {
//           const name = decl.id.name;
//           state.exportNames.add(name);
//           path.insertAfter(
//             t.expressionStatement(
//               t.assignmentExpression(
//                 "=",
//                 t.memberExpression(t.identifier("exports"), t.identifier(name)),
//                 t.identifier(name)
//               )
//             )
//           );
//         }

//         path.replaceWith(decl);
//         return;
//       }

//       node.specifiers.forEach((spec) => {
//         const local = spec.local.name;
//         const exported = spec.exported.name;
//         path.insertAfter(
//           t.expressionStatement(
//             t.assignmentExpression(
//               "=",
//               t.memberExpression(t.identifier("exports"), t.identifier(exported)),
//               t.identifier(local)
//             )
//           )
//         );
//       });

//       path.remove();
//     },

//     ExportDefaultDeclaration(path) {
//       const decl = path.node.declaration;

//       if (t.isFunctionDeclaration(decl) || t.isClassDeclaration(decl)) {
//         const id = decl.id || path.scope.generateUidIdentifier("default");
//         if (!decl.id) decl.id = id;

//         path.replaceWithMultiple([
//           decl,
//           t.expressionStatement(
//             t.assignmentExpression(
//               "=",
//               t.memberExpression(t.identifier("exports"), t.identifier("default")),
//               id
//             )
//           ),
//         ]);
//       } else {
//         path.replaceWith(
//           t.expressionStatement(
//             t.assignmentExpression(
//               "=",
//               t.memberExpression(t.identifier("exports"), t.identifier("default")),
//               decl
//             )
//           )
//         );
//       }
//     },

//     ExportAllDeclaration(path) {
//       const source = path.node.source.value;
//       const requireCall = t.callExpression(t.identifier("__require__"), [t.stringLiteral(source)]);
//       const temp = path.scope.generateUidIdentifier("reexp");

//       path.replaceWithMultiple([
//         t.variableDeclaration("const", [t.variableDeclarator(temp, requireCall)]),

//         t.forInStatement(
//           t.variableDeclaration("const", [t.variableDeclarator(t.identifier("key"))]),
//           temp,
//           t.blockStatement([
//             t.expressionStatement(
//               t.assignmentExpression(
//                 "=",
//                 t.memberExpression(t.identifier("exports"), t.identifier("key"), true),
//                 t.memberExpression(temp, t.identifier("key"), true)
//               )
//             ),
//           ])
//         ),
//       ]);
//     },
//   });

// }

methods.convertESMToCommonJS = function (ast) {
  const self = this;

  const state = {
    moduleIdentifiers: new Map(),
  };

  traverse(ast, {
    Program: {
      enter() {
        state.moduleIdentifiers = new Map();
      },

      exit(path) {
        path.unshiftContainer(
          "body",
          t.expressionStatement(
            t.callExpression(
              t.memberExpression(
                t.identifier("Object"),
                t.identifier("defineProperty")
              ),
              [
                t.identifier("exports"),
                t.stringLiteral("__esModule"),
                t.objectExpression([
                  t.objectProperty(
                    t.identifier("value"),
                    t.booleanLiteral(true)
                  ),
                ]),
              ]
            )
          )
        );
      },
    },

    /*
    -----------------------------
    IMPORT TRANSFORM (SAFE)
    -----------------------------
    */
    ImportDeclaration(path) {
      const source = path.node.source.value;

      const modifiedSource = self.__MODULES_IMPORTS_MAP__[source]
        ? self.__MODULES_IMPORTS_MAP__[source]
        : source;

      let moduleId = state.moduleIdentifiers.get(modifiedSource);

      if (!moduleId) {
        moduleId = path.scope.generateUidIdentifier(
          modifiedSource.replace(/[^a-zA-Z]/g, "")
        );

        state.moduleIdentifiers.set(modifiedSource, moduleId);

        const requireDecl = t.variableDeclaration("const", [
          t.variableDeclarator(
            moduleId,
            t.callExpression(t.identifier("__require__"), [
              t.stringLiteral(modifiedSource),
            ])
          ),
        ]);

        path.insertBefore(requireDecl);
      }

      const declarations = [];

      path.node.specifiers.forEach((spec) => {
        // named import
        if (t.isImportSpecifier(spec)) {
          declarations.push(
            t.variableDeclarator(
              spec.local,
              t.memberExpression(moduleId, spec.imported)
            )
          );
        }

        // default import
        if (t.isImportDefaultSpecifier(spec)) {
          declarations.push(
            t.variableDeclarator(
              spec.local,
              t.memberExpression(moduleId, t.identifier("default"))
            )
          );
        }

        // namespace import
        if (t.isImportNamespaceSpecifier(spec)) {
          declarations.push(t.variableDeclarator(spec.local, moduleId));
        }
      });

      if (declarations.length) {
        path.insertBefore(t.variableDeclaration("const", declarations));
      }

      path.remove();
    },

    /*
    -------------------------
    EXPORT NAMED DECLARATION
    -------------------------
    */
    ExportNamedDeclaration(path) {
      const { node } = path;

      if (node.declaration) {
        const decl = node.declaration;

        const statements = [decl];

        if (t.isVariableDeclaration(decl)) {
          decl.declarations.forEach((d) => {
            const name = d.id.name;

            statements.push(
              t.expressionStatement(
                t.assignmentExpression(
                  "=",
                  t.memberExpression(
                    t.identifier("exports"),
                    t.identifier(name)
                  ),
                  t.identifier(name)
                )
              )
            );
          });
        }

        if (t.isFunctionDeclaration(decl) || t.isClassDeclaration(decl)) {
          const name = decl.id.name;

          statements.push(
            t.expressionStatement(
              t.assignmentExpression(
                "=",
                t.memberExpression(t.identifier("exports"), t.identifier(name)),
                t.identifier(name)
              )
            )
          );
        }

        path.replaceWithMultiple(statements);
        return;
      }

      const statements = [];

      node.specifiers.forEach((spec) => {
        const local = spec.local.name;
        const exported = spec.exported.name;

        statements.push(
          t.expressionStatement(
            t.assignmentExpression(
              "=",
              t.memberExpression(
                t.identifier("exports"),
                t.identifier(exported)
              ),
              t.identifier(local)
            )
          )
        );
      });

      path.replaceWithMultiple(statements);
    },

    /*
    -------------------------
    EXPORT DEFAULT
    -------------------------
    */
    ExportDefaultDeclaration(path) {
      const decl = path.node.declaration;

      if (t.isFunctionDeclaration(decl) || t.isClassDeclaration(decl)) {
        const id = decl.id || path.scope.generateUidIdentifier("default");

        if (!decl.id) decl.id = id;

        path.replaceWithMultiple([
          decl,
          t.expressionStatement(
            t.assignmentExpression(
              "=",
              t.memberExpression(
                t.identifier("exports"),
                t.identifier("default")
              ),
              id
            )
          ),
        ]);
      } else {
        path.replaceWith(
          t.expressionStatement(
            t.assignmentExpression(
              "=",
              t.memberExpression(
                t.identifier("exports"),
                t.identifier("default")
              ),
              decl
            )
          )
        );
      }
    },

    /*
    -------------------------
    EXPORT ALL
    -------------------------
    */
    ExportAllDeclaration(path) {
      const source = path.node.source.value;

      const modifiedSource = self.__MODULES_IMPORTS_MAP__[source]
        ? self.__MODULES_IMPORTS_MAP__[source]
        : source;

      const requireCall = t.callExpression(t.identifier("__require__"), [
        t.stringLiteral(modifiedSource),
      ]);

      const temp = path.scope.generateUidIdentifier("reexp");

      path.replaceWithMultiple([
        t.variableDeclaration("const", [
          t.variableDeclarator(temp, requireCall),
        ]),

        t.forInStatement(
          t.variableDeclaration("const", [
            t.variableDeclarator(t.identifier("key")),
          ]),
          temp,
          t.blockStatement([
            t.expressionStatement(
              t.assignmentExpression(
                "=",
                t.memberExpression(
                  t.identifier("exports"),
                  t.identifier("key"),
                  true
                ),
                t.memberExpression(temp, t.identifier("key"), true)
              )
            ),
          ])
        ),
      ]);
    },
  });
};

methods.findPackageJson = function (fileUrlOrPath) {
  let current = fileUrlOrPath.startsWith("file:")
    ? fileURLToPath(fileUrlOrPath)
    : fileUrlOrPath;

  current = path.dirname(current);

  while (current !== path.parse(current).root) {
    const pkgPath = path.join(current, "package.json");
    if (fs.existsSync(pkgPath)) {
      return pkgPath;
    }
    current = path.dirname(current);
  }

  return null;
};

methods.detectModuleTypeSync = function (resolvedPath) {
  const self = this;

  if (resolvedPath.endsWith(".mjs")) return "esm";
  if (resolvedPath.endsWith(".cjs")) return "commonjs";

  // 2️⃣ .js depends on nearest package.json
  if (resolvedPath.endsWith(".js")) {
    const pkgPath = self.findPackageJson(resolvedPath);

    if (!pkgPath) return "commonjs"; // Node default

    try {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
      return pkg.type === "module" ? "esm" : "commonjs";
    } catch {
      return "commonjs";
    }
  }

  return "commonjs";
};

export default methods;
