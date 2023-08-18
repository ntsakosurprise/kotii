import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context";
import ThumbsRating from "./ThumbsRating";

describe("Running Test for PageHeader component", () => {
  test("Check if page header component renders", () => {
    render(
      <KotiiThemeProvider>
        <ThumbsRating name="mystar" />
      </KotiiThemeProvider>
    );
    // expect(
    //   screen.getByRole("button", { name: "Button marbella" })
    // ).toBeDisabled();
    expect(screen.getByText(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
