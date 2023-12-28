import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context";
import DropButton from "./DropButton";

describe("Running Test for DropButton component", () => {
  test("Check if DropButton component renders", () => {
    render(
      <KotiiThemeProvider>
        <DropButton dropContent={<div></div>} />
      </KotiiThemeProvider>
    );
    // expect(
    //   screen.getByRole("button", { name: "Button marbella" })
    // ).toBeDisabled();
    expect(screen.getByText(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
