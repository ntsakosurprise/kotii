import { kotiiRootPath } from "../../kotii_paths.js";
import postCssLoader from "../postcss-loader/index.cjs";
import webpackContext from "../__mocks__/webpack-context.js";
describe("post-css-loader", () => {
  it("should read and write tailwind css file", async () => {
    const input = `@tailwind base;
    @tailwind components;
    @tailwind utilities;`;

    const result = await postCssLoader.call(
      {
        ...webpackContext,
        options: {
          mainCssFilename: `post-css-input.css`,
          tailwindConfig: `${kotiiRootPath}/webpack-loaders/postcss-loader/tailwind.config.cjs`,
          contentPath: `${kotiiRootPath}/webpack-loaders/__mocks__`,
        },
        resource: `${kotiiRootPath}/webpack-loaders/__mocks__/post-css-input.css`,
      },
      input
    ); // Mock empty 'this' context

    expect(result);
  });
});
