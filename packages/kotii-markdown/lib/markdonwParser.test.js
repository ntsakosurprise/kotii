import { keyValueString, markdown } from "./constants";
import {
  extractDescription,
  extractMetaData,
  extractMetaKeyPairs,
  extractSpecialContent,
} from "./markdownParser";

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

  test("Should return true given a string", () => {
    expect(extractDescription(markdown)).toBeTruthy();
  });

  it("Should return matched special content given markdown string", () => {
    expect(extractSpecialContent(markdown)).toBeTruthy();
  });
});
