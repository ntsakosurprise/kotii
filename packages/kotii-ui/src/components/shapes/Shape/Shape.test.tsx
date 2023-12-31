import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context/";
import Shape from "./Shape";

describe("Testing Main Shape Cases", () => {
  test("Test if Main Shape renders with styled components", () => {
    render(
      <KotiiThemeProvider>
        <Shape width={"small"} testID={DOM_BY_TEXT}>
          {DOM_BY_TEXT}s
        </Shape>
      </KotiiThemeProvider>
    );
    expect(screen.getByTestId(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
