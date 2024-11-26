import React from "react";
import { render, screen } from "@testing-library/react";
import { Layout } from "..";
import "@testing-library/jest-dom";

describe("Layout Component", () => {
  it("renders child components", () => {
    render(
      <Layout>
        <p>Test Content</p>
      </Layout>
    );

    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });
});
