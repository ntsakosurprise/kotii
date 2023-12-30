import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context";
import Distribution from "./Distribution";

describe("Running Test for Distribution component", () => {
  test("Check if Distribution component renders", () => {
    render(
      <KotiiThemeProvider>
        <Distribution
          values={[{ value: 5, color: { dark: "blue" } }]}
          testID={DOM_BY_TEXT}
        />
      </KotiiThemeProvider>
    );
    // expect(
    //   screen.getByRole("button", { name: "Button marbella" })
    // ).toBeDisabled();
    expect(screen.getByTestId(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
