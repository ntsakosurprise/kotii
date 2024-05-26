import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import Footer from "./Footer";

describe("Running Test for Footer component", () => {
  test("Check Footer component Renders", () => {
    render(
      <Footer>
        <p>{DOM_BY_TEXT}</p>
      </Footer>
    );
    expect(screen.getByText(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
