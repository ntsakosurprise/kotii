import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context";
import DataChart from "./DataChart";

describe("Running Test for DataChart component", () => {
  test("Check if DataChart component renders", () => {
    render(
      <KotiiThemeProvider>
        <DataChart data={[0, 1]} />
      </KotiiThemeProvider>
    );
    // expect(
    //   screen.getByRole("button", { name: "Button marbella" })
    // ).toBeDisabled();
    expect(screen.getByText(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
