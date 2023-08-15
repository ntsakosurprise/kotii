import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context/";
import Square from "./Square";

describe("Testing Square Shape Cases", () => {
  test("Test if Shape renders with styled components", () => {
    render(
      <KotiiThemeProvider>
        <Square width={"100px"}>{DOM_BY_TEXT}</Square>
      </KotiiThemeProvider>
    );
    expect(screen.getByText(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
