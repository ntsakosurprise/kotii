import { kotiiRootPath } from "../../kotii_paths.js";
import syncCssModulesLoader from "../sync-css-modules-loader/index.cjs";
import webpackContext from "../__mocks__/webpack-context.js";
describe("sync-css-modules-loader", () => {
  it("should read modules mapper and return results", async () => {
    const result = await syncCssModulesLoader.call(
      {
        ...webpackContext,
        options: {
          referenceAssetsPath: `${kotiiRootPath}/webpack-loaders/__mocks__`,
          assetsFile: "styles-css-modules.json",
          fileFormat: "json",
        },
        resource: `${kotiiRootPath}/webpack-loaders/__mocks__/post-css-input.css`,
      },
      ""
    ); // Mock empty 'this' context

    expect(result).toBeTruthy();
  });
});
