import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context";
import DataSummary from "./DataSummary";

describe("Running Test for DataSummary component", () => {
  test("Check if DataSummary component renders", () => {
    render(
      <KotiiThemeProvider>
        <DataSummary />
      </KotiiThemeProvider>
    );
    // expect(
    //   screen.getByRole("button", { name: "Button marbella" })
    // ).toBeDisabled();
    expect(screen.getByText(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
