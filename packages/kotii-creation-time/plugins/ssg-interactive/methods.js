/* eslint-disable no-unused-vars */
import React from "react";
const methods = {};
import fs from "fs";
import path, { resolve } from "path";
import { rejects } from "assert";
import { renderToStaticMarkup } from "react-dom/server";
import { InteractionProvider } from "kotii-components";
import babel from "@babel/core";
import generate from "@babel/generator";
import parser from "@babel/parser";
import template from "@babel/template";
import traverse from "@babel/traverse";
import * as t from "@babel/types";

methods.init = function () {
  this.listens({
    "generate-ssg-interactivity": this.handleStaticInteractivity.bind(this),
  });
};
methods.handleStaticInteractivity = function (data) {
  const self = this;
  const pao = self.pao;
  const { payload } = data;
  const { type = "react", Page } = payload;
  console.log("HANDLE STATIC INTERACTIVE", data);

  if (!self?.REACT_PROXIED) self.createReactProxy();
  self
    .extractPageInteractiveParts(Page, type)
    .then(function (parts) {
      if (!parts?.interactions)
        return data.callback(null, { html: parts.html });

      let pageJs = self.generatePageJs(parts.interactions);
      data.callback(null, {
        html: parts.html,
        pageJs,
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

  let processedInteractions = interactions.map((interaction) => {
    const { id, events } = interaction;
    let processedEvents = events.map((event) => {
      return `
    document.querySelector('[data-interactive-id="${id}"]').addEventListener('${event.name}', ${event.code});
  `;
    });
    return processedEvents.join("\n");
  });

  return processedInteractions.join("\n");
};

methods.createReactProxy = function () {
  const self = this;
  const useState = self.ReactStateCapture();

  const ReactProxy = React;

  global.React = {
    ...ReactProxy,
    useState: useState,
  };
  self.REACT_PROXIED = true;
};

methods.ReactStateCapture = function () {
  const self = this;

  return (state, stateName) => {
    self.__STATIC_RUNTIME_STATE[stateName] = state;
    return [state, () => {}];
  };
};
methods.eventsSourceAst = function () {
  const self = this;

  return (state, stateName) => {
    self.__STATIC_RUNTIME_STATE[stateName] = state;
    return [state, () => {}];
  };
};
methods.dataToHtmlConnection = function () {
  const self = this;
};
methods.modifyUseStateCallsAst = function (componentAst) {
  const self = this;

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
