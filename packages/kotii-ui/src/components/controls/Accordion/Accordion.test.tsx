import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context";
import Accordion from "./Accordion";

describe("Running Test for Accordion component", () => {
  test("Check if Accordion component renders", () => {
    render(
      <KotiiThemeProvider>
        <Accordion testID={DOM_BY_TEXT}>
          <p>{DOM_BY_TEXT}</p>
        </Accordion>
      </KotiiThemeProvider>
    );
    // expect(
    //   screen.getByRole("button", { name: "Button marbella" })
    // ).toBeDisabled();
    expect(screen.getByText(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
