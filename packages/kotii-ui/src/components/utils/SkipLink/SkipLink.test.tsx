import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context";
import SkipLink from "./SkipLink";

describe("Running Test for SkipLink component", () => {
  test("Check if SkipLink component renders", () => {
    render(
      <KotiiThemeProvider>
        <SkipLink id="test" testID={DOM_BY_TEXT} />
      </KotiiThemeProvider>
    );
    // expect(
    //   screen.getByRole("button", { name: "Button marbella" })
    // ).toBeDisabled();
    expect(screen.getByTestId(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
