//const kotiiMardownPkg = require("./packages/kotii-markdown/package.json");
// const kotiiUIPkg = require("./packages/kotii-ui/package.json");
module.exports = {
  verbose: true,
  projects: [
    "<rootDir>/packages/kotii-markdown/jest.config.js",
    "<rootDir>/packages/kotii/jest.config.cjs",
    "<rootDir>/packages/kotii-ui/jest.config.ts",
  ],
};
