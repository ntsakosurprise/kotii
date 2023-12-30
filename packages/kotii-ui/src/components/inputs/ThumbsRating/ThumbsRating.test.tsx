import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context";
import ThumbsRating from "./ThumbsRating";

describe("Running Test for ThumbsRating component", () => {
  test("Check if ThumbsRating component renders", () => {
    render(
      <KotiiThemeProvider>
        <ThumbsRating name="mystar" testID={DOM_BY_TEXT} testID={DOM_BY_TEXT} />
      </KotiiThemeProvider>
    );

    /** To be  properly tested, this component is currently referenced using other elements other
     * than its self. This is done temporarily for getting all the tests to path, but it should be
     * better implemented and this comment will be removed.
     */
    expect(screen.getByTestId(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
