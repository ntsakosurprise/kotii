import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";

import { KotiiThemeProvider } from "../../../context";
// const kottiSvg = require("./kotii.svg") as string;
const KotiiSVG = require("./kotii.svg");

import { DOM_BY_TEXT } from "../../../constants";
import Svg from "./Svg";
describe("Running Test for Svg component", () => {
  test("Check if Svg component renders", () => {
    render(
      <KotiiThemeProvider>
        <Svg asComponent={KotiiSVG} inline={true} testID={DOM_BY_TEXT} />
      </KotiiThemeProvider>
    );
    // expect(
    //   screen.getByRole("button", { name: "Button marbella" })
    // ).toBeDisabled();
    waitFor(() => expect(screen.getByTestId(DOM_BY_TEXT)).toBeInTheDocument());
  });
});
