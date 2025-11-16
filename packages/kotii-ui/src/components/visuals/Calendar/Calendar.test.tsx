import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context";
import Calendar from "./Calendar";

describe("Running Test for Calendar component", () => {
  test("Check if Calendar component renders", () => {
    render(
      <KotiiThemeProvider>
        <Calendar children={["option1"]} testID={DOM_BY_TEXT} />
      </KotiiThemeProvider>
    );

    expect(screen.getByTestId(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
