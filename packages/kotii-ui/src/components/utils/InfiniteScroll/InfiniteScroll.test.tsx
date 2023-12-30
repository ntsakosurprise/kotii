import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context";
import InfiniteScroll from "./InfiniteScroll";

describe("Running Test for InfiniteScroll component", () => {
  test("Check if InfiniteScroll component renders", () => {
    render(
      <KotiiThemeProvider>
        <InfiniteScroll>
          <p>test</p>
        </InfiniteScroll>
      </KotiiThemeProvider>
    );
    // expect(
    //   screen.getByRole("button", { name: "Button marbella" })
    // ).toBeDisabled();
    expect(screen.getByTestId(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
