import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";

import { KotiiThemeProvider } from "../../../context";
// const kottiSvg = require("./kotii.svg") as string;
import KotiiSVG from "./kotii.svg";

import { DOM_BY_TEXT } from "../../../constants";
import Svg from "./Svg";
describe("Running Test for Svg component", () => {
  test("Check if Svg component renders", () => {
    render(
      <KotiiThemeProvider>
        <Svg asComponent={KotiiSVG as any} inline={true} testID={DOM_BY_TEXT} />
      </KotiiThemeProvider>
    );
    // expect(
    //   screen.getByRole("button", { name: "Button marbella" })
    // ).toBeDisabled();
    waitFor(() => expect(screen.getByTestId(DOM_BY_TEXT)).toBeInTheDocument());
  });
});
