import { kotiiRootPath } from "../../kotii_paths.js";
import addHotLoader from "../add-hot-loader/index.cjs";
import webpackContext from "../__mocks__/webpack-context.js";

describe("add-hot-loader", () => {
  it("should add hot module reload to the app entry source", () => {
    const input = `import App from "kotii-scripts";
    import { Layout, Root } from "Startup";
    App(Root, Layout);
    `;

    const result = addHotLoader.call(
      {
        ...webpackContext,
        options: {
          entryFile: `${kotiiRootPath}/webpack-loaders/__mocks__/add-hot-input.js`,
        },
        resource: `${kotiiRootPath}/webpack-loaders/__mocks__/add-hot-input.js`,
      },
      input
    ); // Mock empty 'this' context

    expect(result).toBeTruthy();
  });
});
