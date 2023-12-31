import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context";
import CheckBoxGroup from "./CheckBoxGroup";

describe("Running Test for CheckBoxGroup component", () => {
  test("Check if CheckBoxGroup component renders", () => {
    render(
      <KotiiThemeProvider>
        <CheckBoxGroup
          options={["Maui", "Kauai", "Oahu"]}
          testID={DOM_BY_TEXT}
        />
      </KotiiThemeProvider>
    );
    // expect(
    //   screen.getByRole("button", { name: "Button marbella" })
    // ).toBeDisabled();
    expect(screen.getByTestId(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
