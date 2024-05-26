import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context";
import Collapsible from "./Collapsible";

describe("Running Test for Collapsible component", () => {
  test("Check if Collapsible component renders", () => {
    render(
      <KotiiThemeProvider>
        <Collapsible testID={DOM_BY_TEXT}>
          <p>test</p>
        </Collapsible>
      </KotiiThemeProvider>
    );
    // expect(
    //   screen.getByRole("button", { name: "Button marbella" })
    // ).toBeDisabled();
    expect(screen.getByTestId(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
