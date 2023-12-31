import { getFromStorage, removeFromStorage, setInStorage } from "./index.js";

describe("Test localStorage methods", () => {
  describe("Test LocalStorage.setInStorage", () => {
    test("Should set/store a given value in storage", () => {
      expect(
        setInStorage(
          "profile",
          JSON.stringify({ name: "Ntsako", surname: "Mashele" })
        )
      ).toBeTruthy();
    });
  });
  describe("Test LocalStorage.getFromStorage", () => {
    test("Should get a set key's value from storage", () => {
      expect(getFromStorage("profile")).toBeTruthy();
    });
  });

  describe("Test LocalStorage.removeFromStorage", () => {
    test("Should remove a given key from storage", () => {
      expect(removeFromStorage("profile")).toBeTruthy();
    });
  });
});
