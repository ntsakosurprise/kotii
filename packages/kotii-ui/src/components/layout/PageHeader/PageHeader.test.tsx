import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context";
import PageHeader from "./PageHeader";

describe("Running Test for PageHeader component", () => {
  test("Check if page header component renders", () => {
    render(
      <KotiiThemeProvider>
        <PageHeader parent={<p>{DOM_BY_TEXT}</p>} />
      </KotiiThemeProvider>
    );
    // expect(
    //   screen.getByRole("button", { name: "Button marbella" })
    // ).toBeDisabled();
    expect(screen.getByText(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
