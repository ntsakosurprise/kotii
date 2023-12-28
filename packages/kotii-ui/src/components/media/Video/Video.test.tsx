import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context";
import Video from "./Video";

describe("Running Test for Video component", () => {
  test("Check if Video component renders", () => {
    render(
      <KotiiThemeProvider>
        <Video>
          <p>test</p>
        </Video>
      </KotiiThemeProvider>
    );
    // expect(
    //   screen.getByRole("button", { name: "Button marbella" })
    // ).toBeDisabled();
    expect(screen.getByText(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
