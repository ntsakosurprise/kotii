import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Box from "./Box";

describe("Running Test for Marbella Button", () => {
  test("Check Button Disabled", () => {
    render(
      <Box size="large" direction="row">
        <p>My name</p>
      </Box>
    );
    expect(
      screen.getByRole("button", { name: "Button marbella" })
    ).toBeDisabled();
  });
});
