import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context";
import DataFilters from "./DataFilters";
import { Data } from "grommet";

describe("Running Test for DataFilter   component", () => {
  test("Check if DataFilter  component renders", () => {
    render(
      <KotiiThemeProvider>
        <Data data={[]}>
          <DataFilters testID={DOM_BY_TEXT} />
        </Data>
      </KotiiThemeProvider>
    );
    // expect(
    //   screen.getByRole("button", { name: "Button marbella" })
    // ).toBeDisabled();
    expect(screen.getByTestId(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
