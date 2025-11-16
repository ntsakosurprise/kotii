const globals = require("globals");
const jesty = require("eslint-plugin-jest");

module.exports = [
  {
    files: ["**/*.test.js", "**/*.spec.js"], // Apply to your test files
    ...jesty.configs, // Or jest.configs['flat/all'].rules for more rules

    // languageOptions: {
    //   globals: {
    //     ...globals.jesty, // Add Jest global variables (describe, it, expect, etc.)
    //   },
    // },
  },
];
