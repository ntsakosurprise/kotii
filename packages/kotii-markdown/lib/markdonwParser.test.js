import { keyValueString, markdown } from "./constants";
import { extractMetaData, extractMetaKeyPairs } from "./markdownParser";

describe("Markdown Parser Extracters", () => {
  test("Should return a null given unmatched string", () => {
    expect(extractMetaData("I am the test string")).toBe(null);
  });
  test("Should return an array given matched string", () => {
    expect(extractMetaData(markdown)).toBeTruthy();
  });
  test("Should return true given a string", () => {
    expect(extractMetaKeyPairs(keyValueString)).toBeTruthy();
  });
});
