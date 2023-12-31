import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context";
import Keyboard from "./Keyboard";

describe("Running Test for Keyboard component", () => {
  test("Check if Keyboard component renders", () => {
    render(
      <KotiiThemeProvider>
        <Keyboard testID={DOM_BY_TEXT}>
          <p>test</p>
        </Keyboard>
      </KotiiThemeProvider>
    );
    // expect(
    //   screen.getByRole("button", { name: "Button marbella" })
    // ).toBeDisabled();
    expect(screen.getByTestId(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
