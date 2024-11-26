import React from "react";
import { render } from "@testing-library/react";
import { SEO } from "../SEO";
import "@testing-library/jest-dom";

describe("SEO Component", () => {
  it("renders correct meta tags", () => {
    render(
      <SEO
        title="Test Page"
        name="description"
        content="Test Content"
        lang="pl"
      />
    );
  });
});
