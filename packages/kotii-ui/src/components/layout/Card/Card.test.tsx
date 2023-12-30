import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import Card from "./Card";

describe("Running Test for Card", () => {
  test("Check Card Renders", () => {
    render(
      <Card
        height="small"
        width="small"
        background="green"
        testID={DOM_BY_TEXT}
      >
        <p>{DOM_BY_TEXT}</p>
      </Card>
    );
    expect(screen.getByTestId(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
