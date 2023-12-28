import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context";
import RangeSelector from "./RangeSelector";

describe("Running Test for RangeSelector component", () => {
  test("Check if RangeSelector component renders", () => {
    render(
      <KotiiThemeProvider>
        <RangeSelector />
      </KotiiThemeProvider>
    );
    // expect(
    //   screen.getByRole("button", { name: "Button marbella" })
    // ).toBeDisabled();
    expect(screen.getByText(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
