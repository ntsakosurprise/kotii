import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context";
import Nav from "./Nav";

describe("Running Test for Nav component", () => {
  test("Check if Nav component renders", () => {
    render(
      <KotiiThemeProvider>
        <Nav testID={DOM_BY_TEXT}>
          <p>{DOM_BY_TEXT}</p>
        </Nav>
      </KotiiThemeProvider>
    );
    // expect(
    //   screen.getByRole("button", { name: "Button marbella" })
    // ).toBeDisabled();
    expect(screen.getByTestId(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
