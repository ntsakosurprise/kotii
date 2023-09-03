import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";

import { KotiiThemeProvider } from "../../../context";
// const kottiSvg = require("./kotii.svg") as string;
const KotiiSVG = require("./kotii.svg");

import Svg from "./Svg";

describe("Running Test for Svg component", () => {
  test("Check if Svg component renders", () => {
    render(
      <KotiiThemeProvider>
        <Svg asComponent={KotiiSVG} inline={true} />
      </KotiiThemeProvider>
    );
    // expect(
    //   screen.getByRole("button", { name: "Button marbella" })
    // ).toBeDisabled();
    waitFor(() =>
      expect(screen.getAllByRole("HTMLElement")).toBeInTheDocument()
    );
  });
});
