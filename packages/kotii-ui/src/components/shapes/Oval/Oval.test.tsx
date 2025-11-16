import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context/";
import Oval from "./Oval";

describe("Testing Oval Shape Cases", () => {
  test("Test if Oval Shape renders with styled components", () => {
    render(
      <KotiiThemeProvider>
        <Oval width={"small"} testID={DOM_BY_TEXT}>
          {DOM_BY_TEXT}s
        </Oval>
      </KotiiThemeProvider>
    );
    expect(screen.getByTestId(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
