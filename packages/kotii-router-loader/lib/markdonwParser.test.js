import { keyValueString, markdown, tocTestMarkdown } from "./constants";
import {
  convertMarkdown,
  extractDescription,
  extractMetaData,
  extractMetaKeyPairs,
  extractSpecialContent,
  idifyString,
  splitMarkdown,
} from "./markdownParser";

// const splitMark = splitMarkdown(markdown);

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

  test("it should return truthy given markdown string", () => {
    expect(splitMarkdown(markdown)).toBeTruthy();
  });
  test("should return a truthy with valid string", () => {
    expect(idifyString(" My name is my name")).toBeTruthy();
  });
  test("should return a truthy with valid markdown string", () => {
    expect(convertMarkdown("## My nameis my name")).toBeTruthy();
  });
  test("should return a truthy with valid markdown toc string", () => {
    expect(convertMarkdown(tocTestMarkdown)).toBeTruthy();
  });
});
