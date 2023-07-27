import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Card from "./Card";

describe("Running Test for Card", () => {
  test("Check Card Renders", () => {
    render(
      <Card height="small" width="small" background="green">
        <p>My name</p>
      </Card>
    );
    expect(screen.getByText("My name")).toBeInTheDocument();
  });
});
