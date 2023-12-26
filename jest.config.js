const kotiiMardownPkg = require("./packages/kotii-markdown/package.json");
const kotiiUIPkg = require("./packages/kotii-ui/package.json");
module.exports = {
  verbose: true,
  projects: [
    {
      //   preset: "ts-jest/presets/js-with-ts",
      //   testEnvironment: "jsdom",
      //   setupFilesAfterEnv: ["./jest.setup.js"],
      displayName: kotiiMardownPkg.name,
      testMatch: [
        "<rootDir>/packages/kotii-markdown/**/?(*.)+(spec|test).[jt]s?(x)",
      ],
    },
    {
      preset: "ts-jest/presets/js-with-ts",
      testEnvironment: "jsdom",
      //   setupFilesAfterEnv: ["./jest.setup.js"],
      displayName: kotiiUIPkg.name,
      testMatch: ["<rootDir>/packages/kotii-ui/**/?(*.)+(spec|test).[jt]s?(x)"],
    },
  ],
};
