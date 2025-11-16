import { kotiiRootPath } from "../../kotii_paths.js";
import eslintLoader from "./index.cjs";

describe("eslint-loader", () => {
  it("should lint javascript file", () => {
    const input = `Hello World`;

    const result = eslintLoader.call(
      {
        getOptions: function () {
          return this.options;
        },
        async: function () {
          return (err, content) => {
            return new Promise((resolve, reject) => {
              resolve(content);
            });
          };
        },
        options: {
          configPath: `${kotiiRootPath}/webpack-loaders/__mocks__/eslint.config.cjs`,
        },
        resource: `${kotiiRootPath}/webpack-loaders/__mocks__/eslint-loader-input.js`,
      },
      input
    ); // Mock empty 'this' context

    expect(result).toBeTruthy();
  });
});
