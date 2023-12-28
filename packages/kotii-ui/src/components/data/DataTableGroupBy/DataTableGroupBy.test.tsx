import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context";
import DataTableGroupBy from "./DataTableGroupBy";

describe("Running Test for DataTableGroupBy component", () => {
  test("Check if DataTableGroupBy component renders", () => {
    render(
      <KotiiThemeProvider>
        <DataTableGroupBy />
      </KotiiThemeProvider>
    );
    // expect(
    //   screen.getByRole("button", { name: "Button marbella" })
    // ).toBeDisabled();
    expect(screen.getByText(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
