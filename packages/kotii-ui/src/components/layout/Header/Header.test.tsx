import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context";
import Header from "./Header";

describe("Running Test for Header component", () => {
  test("Check Header component renders", () => {
    render(
      <KotiiThemeProvider>
        <Header testID={DOM_BY_TEXT}>
          <p>{DOM_BY_TEXT}</p>
        </Header>
      </KotiiThemeProvider>
    );
    expect(screen.getByTestId(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
