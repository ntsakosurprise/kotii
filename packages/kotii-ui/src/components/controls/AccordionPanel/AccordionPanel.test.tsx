import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context";
import AccordionPanel from "./AccordionPanel";

describe("Running Test for AccordionPanel component", () => {
  test("Check if AccordionPanel component renders", () => {
    render(
      <KotiiThemeProvider>
        <AccordionPanel testID={DOM_BY_TEXT}>
          <p>{DOM_BY_TEXT}</p>
        </AccordionPanel>
      </KotiiThemeProvider>
    );
    // expect(
    //   screen.getByRole("button", { name: "Button marbella" })
    // ).toBeDisabled();
    expect(screen.getByTestId(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
