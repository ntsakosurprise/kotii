import {
  getFromStorage,
  removeFromStorage,
  setInStorage,
} from "./localStorage";

describe("Test localStorage methods", () => {
  describe("Test LocalStorage.setInStorage", () => {
    test("Should set/store a given value in storage", () => {
      expect(
        setInStorage(
          JSON.stringify({
            profile: JSON.stringify({ name: "Ntsako", surname: "Mashele" }),
          })
        )
      ).toBeTruthy();
    });
  });
  describe("Test LocalStorage.getFromStorage", () => {
    test("Should set/store a given value in storage", () => {
      expect(getFromStorage("profile")).toBeTruthy();
    });
  });

  describe("Test LocalStorage.removeFromStorage", () => {
    test("Should set/store a given value in storage", () => {
      expect(removeFromStorage("profile")).toBeTruthy();
    });
  });
});
