import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context";
import Chart from "./Chart";

describe("Running Test for Chart component", () => {
  test("Check if Chart component renders", () => {
    render(
      <KotiiThemeProvider>
        <Chart values={[0, 1]} testID={DOM_BY_TEXT} />
      </KotiiThemeProvider>
    );
    // expect(
    //   screen.getByRole("button", { name: "Button marbella" })
    // ).toBeDisabled();
    expect(screen.getByTestId(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
