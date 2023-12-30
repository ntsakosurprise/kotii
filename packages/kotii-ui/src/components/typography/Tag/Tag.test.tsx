import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context";
import TAG from "./Tag";

describe("Running Test for TAG component", () => {
  test("Check if TAG component renders", () => {
    render(
      <KotiiThemeProvider>
        <TAG value="theValue">{DOM_BY_TEXT}</TAG>
      </KotiiThemeProvider>
    );
    // expect(
    //   screen.getByRole("button", { name: "Button marbella" })
    // ).toBeDisabled();
    expect(screen.getByTestId(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
