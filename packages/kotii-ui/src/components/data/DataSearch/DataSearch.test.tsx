import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context";
import DataSearch from "./DataSearch";

describe("Running Test for DataSearch component", () => {
  test("Check if DataSearch component renders", () => {
    render(
      <KotiiThemeProvider>
        <DataSearch testID={DOM_BY_TEXT} />
      </KotiiThemeProvider>
    );
    // expect(
    //   screen.getByRole("button", { name: "Button marbella" })
    // ).toBeDisabled();
    expect(screen.getByTestId(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
