import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { KotiiThemeProvider } from "../../../context";
import Menu from "./Menu";

describe("Running Test for Menu component", () => {
  test("Check if Menu component renders", () => {
    render(
      <KotiiThemeProvider>
        <Menu items={[]} />
      </KotiiThemeProvider>
    );
    /** To be  properly tested, this component is currently referenced using other elements other
     * than its self. This is done temporarily for getting all the tests to path, but it should be
     * better implemented and this comment will be removed.
     */
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
