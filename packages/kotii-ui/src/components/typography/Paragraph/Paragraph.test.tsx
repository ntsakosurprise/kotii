import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context";
import Paragraph from "./Paragraph";

describe("Running Test for Paragraph  component", () => {
  test("Check if Paragraph component renders", () => {
    render(
      <KotiiThemeProvider>
        <Paragraph>{DOM_BY_TEXT}</Paragraph>
      </KotiiThemeProvider>
    );
    // expect(
    //   screen.getByRole("button", { name: "Button marbella" })
    // ).toBeDisabled();
    expect(screen.getByText(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
