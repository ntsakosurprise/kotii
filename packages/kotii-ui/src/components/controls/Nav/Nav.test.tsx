import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context";
import Nav from "./Nav";

describe("Running Test for Grid component", () => {
  test("Check if Grid component renders", () => {
    render(
      <KotiiThemeProvider>
        <Nav>
          <p>{DOM_BY_TEXT}</p>
        </Nav>
      </KotiiThemeProvider>
    );
    // expect(
    //   screen.getByRole("button", { name: "Button marbella" })
    // ).toBeDisabled();
    expect(screen.getByText(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
