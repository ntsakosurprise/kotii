import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import Text from "./Text";

describe("Running Test for Text component", () => {
  test("Check if Text component renders", () => {
    render(<Text>{DOM_BY_TEXT}</Text>);
    expect(screen.getByText(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
