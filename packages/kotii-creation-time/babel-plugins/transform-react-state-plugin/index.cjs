/* eslint-disable no-unused-vars */
const t = require("@babel/types");
const path = require("path");
const fs = require("fs");
const { BUILTINS, TRAVERSERS } = require("./pluginUtils.cjs");
/* eslint-disable no-unused-vars */

const transformReactStatePlugin = () => {
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

      // // -----------------------------
      // // Variable tracking
      // // -----------------------------
      // VariableDeclarator(path, state) {
      //   TRAVERSERS.ExtractVariables(path, state);
      // },

      // -----------------------------
      // Imports
      // -----------------------------
      // ImportDeclaration(path, state) {
      //   TRAVERSERS.ExtractImports(path, state);
      // },

      // -----------------------------
      // Interactive detection
      // -----------------------------
      JSXElement(path, state) {
        TRAVERSERS.MatchJSXElement(path, state);
      },
    },
  };
};

module.exports = transformReactStatePlugin;
