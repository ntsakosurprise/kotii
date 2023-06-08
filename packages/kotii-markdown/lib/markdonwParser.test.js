import { extractMetaData } from "./markdownParser";

test("Should return a null given unmatched string", () => {
  expect(extractMetaData("I'm the test string")).toBe(null);
});
