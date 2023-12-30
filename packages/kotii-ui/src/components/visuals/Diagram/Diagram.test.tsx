import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context/";
import Diagram from "./Diagram";

describe("Testing Diagram Shape Cases", () => {
  test("Test if Diagram Shape renders with styled components", () => {
    const elRef = React.createRef();
    render(
      <KotiiThemeProvider>
        <div ref={elRef as any} id={"test-id"} />
        <Diagram
          testID={DOM_BY_TEXT}
          connections={[
            {
              anchor: "center",
              animation: "pulse",
              color: "graph-0",
              fromTarget: "my-dom-id-1",
              label: "link 5",
              offset: "...",
              thickness: "medium",
              toTarget: "testid",
              type: "rectilinear",
            },
          ]}
        />
      </KotiiThemeProvider>
    );
    expect(screen.getByTestId(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
