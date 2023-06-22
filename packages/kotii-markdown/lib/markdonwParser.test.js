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
  test("Should return an object given a valid string", () => {
    expect(extractMetaKeyPairs(keyValueString)).toBeTruthy();
  });

  test("Should return a null given an invalide string", () => {
    expect(extractMetaKeyPairs("I am the invalid string")).toBeNull();
  });

  test("Should return true given a string f", () => {
    expect(extractDescription(markdown)).toBeTruthy();
  });

  test("Should return a null given an invalid string", () => {
    expect(
      extractDescription("An invalid markdown string for description")
    ).toBeNull();
  });

  it("Should return matched special content given markdown string", () => {
    expect(extractSpecialContent(markdown)).toBeTruthy();
  });

  it("Should return a null given an invalid markdown string", () => {
    expect(
      extractSpecialContent("An invalid markdown string mirror")
    ).toBeNull();
  });
});
