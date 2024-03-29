import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import Footer from "./Footer";

describe("Running Test for Footer component", () => {
  test("Check Footer component Renders", () => {
    render(
      <Footer testID={DOM_BY_TEXT}>
        <p>{DOM_BY_TEXT}</p>
      </Footer>
    );
    expect(screen.getByTestId(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
