import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context";
import SelectMultiple from "./SelectMultiple";

describe("Running Test for SelectMultiple component", () => {
  test("Check if SelectMultiple component renders", () => {
    render(
      <KotiiThemeProvider>
        <SelectMultiple options={["option1"]} />
      </KotiiThemeProvider>
    );
    // expect(
    //   screen.getByRole("button", { name: "Button marbella" })
    // ).toBeDisabled();
    expect(screen.getByText(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
