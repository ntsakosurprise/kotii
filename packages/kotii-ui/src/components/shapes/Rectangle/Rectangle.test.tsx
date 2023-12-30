import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context/";
import Rectangle from "./Rectangle";

describe("Testing Rectangle Shape Cases", () => {
  test("Test if Rectangle Shape renders with styled components", () => {
    render(
      <KotiiThemeProvider>
        <Rectangle width={"small"} testID={DOM_BY_TEXT}>
          {DOM_BY_TEXT}s
        </Rectangle>
      </KotiiThemeProvider>
    );
    expect(screen.getByTestId(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
