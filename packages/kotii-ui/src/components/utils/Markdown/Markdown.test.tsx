import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context";
import Markdown from "./Markdown";

describe("Running Test for Markdown component", () => {
  test("Check if Markdown component renders", () => {
    render(
      <KotiiThemeProvider>
        <Markdown testID={DOM_BY_TEXT}>{DOM_BY_TEXT}</Markdown>
      </KotiiThemeProvider>
    );
    // expect(
    //   screen.getByRole("button", { name: "Button marbella" })
    // ).toBeDisabled();
    expect(screen.getByTestId(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
