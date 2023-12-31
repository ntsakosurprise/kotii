import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context";
import Drop from "./Drop";

describe("Running Test for Drop component", () => {
  test("Check if Drop  component renders", () => {
    const elRef = React.createRef();
    /** The use of Ref for jest will be improved, the current implementation is a temp fix */
    render(
      <KotiiThemeProvider>
        <div ref={elRef as any} />
        <Drop testID={DOM_BY_TEXT} target={elRef} />
      </KotiiThemeProvider>
    );
    // expect(
    //   screen.getByRole("button", { name: "Button marbella" })
    // ).toBeDisabled();
    expect(screen.getByTestId(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
