import { logger } from "./index.js";

describe("Test Kotti logger CASES", () => {
  test("logger object logs data to the console", () => {
    expect(logger.log("events", "The Program has started")).toBeTruthy();
  });
});
