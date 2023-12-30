import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context/";
import Circle from "./Cicle";

describe("Testing Circle Shape Cases", () => {
  test("Test if Circle Shape renders with styled components", () => {
    render(
      <KotiiThemeProvider>
        <Circle width={"small"} testID={DOM_BY_TEXT}>
          {DOM_BY_TEXT}s
        </Circle>
      </KotiiThemeProvider>
    );
    expect(screen.getByTestId(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
