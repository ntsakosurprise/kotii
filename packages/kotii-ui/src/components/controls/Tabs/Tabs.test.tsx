import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context";
import Tabs from "./Tabs";

describe("Running Test for Tabs component", () => {
  test("Check if Tabs component renders", () => {
    render(
      <KotiiThemeProvider>
        <Tabs>
          <p>test</p>
        </Tabs>
      </KotiiThemeProvider>
    );
    // expect(
    //   screen.getByRole("button", { name: "Button marbella" })
    // ).toBeDisabled();
    expect(screen.getByText(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
