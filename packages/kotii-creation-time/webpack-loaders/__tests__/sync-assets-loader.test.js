import { kotiiRootPath } from "../../kotii_paths.js";
import syncAssetsLoader from "../sync-assets-loader/index.cjs";
import webpackContext from "../__mocks__/webpack-context.js";
describe("sync-assets-loader", () => {
  it("should read modules mapper and return results", async () => {
    webpackContext._module.resourceResolveData.relativePath =
      "./img/docs_search.png";
    const result = await syncAssetsLoader.call(
      {
        ...webpackContext,
        options: {
          referenceAssetsPath: `${kotiiRootPath}/webpack-loaders/__mocks__`,
          assetsFile: "assets.manifest.json",
          fileFormat: "json",
        },
      },
      ""
    ); // Mock empty 'this' context

    expect(result).toBeTruthy();
  });
});
