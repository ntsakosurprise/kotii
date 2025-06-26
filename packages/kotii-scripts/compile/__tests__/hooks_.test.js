import { jest } from "@jest/globals";
import * as kotiiJSNodeJsLoaderHooks from "../hooks_.js";

// let fileUrl =
//   "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/assets/img/docs_search.png";
// let fileName = "docs_search.png";
// let extension = ".png";

describe("Test Nodejs Loader Hook Api Functionality", () => {
  describe("Should run default resolve and load hooks", () => {
    const defaultResolve = jest.fn(async (specifier, context, next) => {
      return { url: `file://${specifier}` };
    });

    const defaultLoad = jest.fn(async (url, context, next) => {
      return { format: "module", source: url };
    });

    test('resolve returns mocked URL for "mocked-module"', async () => {
      const result = await kotiiJSNodeJsLoaderHooks.resolve(
        "mocked-module",
        {},
        defaultResolve
      );

      expect(result).toEqual({ url: "file://mocked-module" });
      expect(defaultResolve).toHaveBeenCalled();
    });

    test("resolve delegates to defaultResolve for other specifiers", async () => {
      const result = await kotiiJSNodeJsLoaderHooks.resolve(
        "other-module",
        {},
        defaultResolve
      );

      // expect(result).toEqual({ url: "file://other-module" });
      expect(defaultResolve).toHaveBeenCalled();
    });

    test("load returns mocked source for data URL", async () => {
      const sourceCode = 'export default "mocked source";';
      const encoded = encodeURIComponent(sourceCode);
      const url = `data:text/javascript,${encoded}`;

      const result = await kotiiJSNodeJsLoaderHooks.load(url, {}, defaultLoad);

      expect(defaultLoad).toHaveBeenCalled();
      expect(result).toHaveProperty("format");
    });

    test("load delegates to defaultLoad for other URLs", async () => {
      const result = await kotiiJSNodeJsLoaderHooks.load(
        "file:///some-file.js",
        {},
        defaultLoad
      );
      expect(result).toHaveProperty("format");
      expect(defaultLoad).toHaveBeenCalled();
    });
  });
});

// describe("Should run process image files tests", () => {
//   test("Should return image file content", () => {
//     expect(
//       kotiiJSNodeJsLoaderHooks.processImageFiles(fileUrl, fileName, extension)
//     ).toBeTruthy();
//   });

//   describe("Should run p_o_freeze tests", () => {
//     test("Should return a frozen object", () => {
//       expect(p_o_freeze(mock.p_o_freeze.positive.toFreeze)).toBeTruthy();
//     });
//     test("Should return null for none-object", () => {
//       expect(p_o_freeze(mock.p_o_freeze.negative.toFreezeNull)).toBeNull();
//     });
//   });

//   describe("Should run p_clone tests", () => {
//     test("Should return a cloned object", () => {
//       const jMock = jest.fn((o) => p_clone(o));
//       const cloned = jMock(mock.p_clone.positive.toClone);
//       expect(cloned).toEqual(mock.p_clone.positive.toClone);
//     });
//     test("Should return null for none-object", () => {
//       expect(p_clone("")).toBeFalsy();
//     });
//   });

//   describe("Should run p_deepMerge tests", () => {
//     test("Should return a merged object", () => {
//       const jMock = jest.fn((f, t) => p_deepMerge(f, t));
//       const merged = jMock(
//         mock.p_deepMerge.positive.fromMerge,
//         mock.p_deepMerge.positive.toMerge
//       );
//       expect(merged).toEqual({
//         ...mock.p_deepMerge.positive.fromMerge,
//         ...mock.p_deepMerge.positive.toMerge,
//       });
//     });
//     test("Should return null no arguments have passed", () => {
//       expect(p_deepMerge()).toBeFalsy();
//     });
//     test("Should return null if only one argument passed", () => {
//       expect(p_deepMerge(mock.p_deepMerge.positive.fromMerge)).toBeFalsy();
//     });
//   });
//   describe("Should run p_forEach tests", () => {
//     test("Should return truthy for an object iterable", () => {
//       const jMock = jest.fn((o, f) => p_forEach(o, f));
//       const returnValue = jMock(
//         mock.p_forEach.positive.main,
//         mock.p_forEach.positive.objectHandler
//       );
//       expect(returnValue).toBeTruthy();
//     });

//     test("Should return truthy for an object array iterable", () => {
//       const jMock = jest.fn((o, f) => p_forEach(o, f));
//       const returnValue = jMock(
//         mock.p_forEach.positive.list,
//         mock.p_forEach.positive.arrayHandler
//       );
//       expect(returnValue).toBeTruthy();
//     });
//     test("Should return falsey for primitive values", () => {
//       const jMock = jest.fn((o, f) => p_forEach(o, f));
//       const returnValue = jMock("text");
//       expect(p_forEach(returnValue)).toBeFalsy();
//     });
//     test("Should return falsey if only one argument passed", () => {
//       expect(p_forEach(mock.p_forEach.positive.main)).toBeFalsy();
//     });
//   });
// });
