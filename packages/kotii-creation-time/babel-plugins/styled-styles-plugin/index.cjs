/* eslint-disable no-unused-vars */
const t = require("@babel/types");
const path = require("path");
const fs = require("fs");
const { BUILTINS, TRAVERSERS } = require("./pluginUtils.cjs");
const { jSXExpressionContainer } = require("@babel/types");
/* eslint-disable no-unused-vars */

const transformStyledComponentsPlugin = (babel, options) => {
  console.log("PLUGIN OPTIONS", options);
  return {
    visitor: {
      Program: {
        enter(path, state) {
          TRAVERSERS.ProgramEnter(path, state);
        },

        exit(path, state) {
          TRAVERSERS.ProgramExiter(path, state);
        },
      },

      // -----------------------------
      // Variable tracking
      // -----------------------------
      VariableDeclarator(path, state) {
        TRAVERSERS.ExtractVariables(path, state);
      },

      // -----------------------------
      // Imports
      // -----------------------------
      ImportDeclaration(path, state) {
        TRAVERSERS.ExtractImports(path, state, options);
      },

      JSXExpressionContainer(path, state) {
        try {
          TRAVERSERS.ExtractJSX(path, state);
        } catch (error) {
          console.log("TRAVERSE EXPRESSION CONTAINER ERROR", error);
        }
      },

      // -----------------------------
      // Interactive detection
      // -----------------------------
      JSXElement(path, state) {
        TRAVERSERS.MatchJSXElement(path, state);
      },
    },
  };
};

module.exports = transformStyledComponentsPlugin;
