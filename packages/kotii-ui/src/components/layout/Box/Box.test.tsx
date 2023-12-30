import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { DOM_BY_TEXT } from "../../../constants";

import Box from "./Box";

describe("Running Test for Box component", () => {
  test("Check Box Component renders", () => {
    render(
      <Box size="large" direction="row">
        <p>{DOM_BY_TEXT}</p>
      </Box>
    );
    expect(screen.getByTestId(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
