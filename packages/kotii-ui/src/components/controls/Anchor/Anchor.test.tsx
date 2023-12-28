import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context";
import Anchor from "./Anchor";

describe("Running Test for Anchor component", () => {
  test("Check if Anchor component renders", () => {
    render(
      <KotiiThemeProvider>
        <Anchor>
          <p>{DOM_BY_TEXT}</p>
        </Anchor>
      </KotiiThemeProvider>
    );
    // expect(
    //   screen.getByRole("button", { name: "Button marbella" })
    // ).toBeDisabled();
    expect(screen.getByText(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
