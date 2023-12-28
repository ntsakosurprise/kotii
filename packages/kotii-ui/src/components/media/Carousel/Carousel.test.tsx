import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context";
import Carousel from "./Carousel";

describe("Running Test for Carousel component", () => {
  test("Check if Carousel component renders", () => {
    render(
      <KotiiThemeProvider>
        <Carousel>
          <p>test</p>
        </Carousel>
      </KotiiThemeProvider>
    );
    // expect(
    //   screen.getByRole("button", { name: "Button marbella" })
    // ).toBeDisabled();
    expect(screen.getByText(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
