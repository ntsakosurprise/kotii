import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { DOM_BY_TEXT } from "../../../constants";
import { KotiiThemeProvider } from "../../../context";
import Page from "../Page";
import PageContent from "./PageContent";

describe("Running Test for Page component", () => {
  test("Check if page component renders", () => {
    render(
      <KotiiThemeProvider>
        <Page kind="wide" pad={"none"}>
          <PageContent>
            <p>{DOM_BY_TEXT}</p>
          </PageContent>
        </Page>
      </KotiiThemeProvider>
    );
    // expect(
    //   screen.getByRole("button", { name: "Button marbella" })
    // ).toBeDisabled();
    expect(screen.getByText(DOM_BY_TEXT)).toBeInTheDocument();
  });
});
