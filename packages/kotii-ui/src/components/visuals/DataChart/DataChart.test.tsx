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
        <DataChart
          data={[
            {
              date: "2020-05-28",
              amount: 88,
              percent: 20,
            },
          ]}
          testID={DOM_BY_TEXT}
        />
      </KotiiThemeProvider>
    );
    // expect(
    //   screen.getByRole("button", { name: "Button marbella" })
    // ).toBeDisabled();
    expect(screen.getByTestId(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
