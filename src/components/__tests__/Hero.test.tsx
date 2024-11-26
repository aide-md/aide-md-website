import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Hero } from "../Hero";

describe("Hero Component", () => {
  it("renders the correct title, subtitle, and CTA button", () => {
    render(
      <Hero
        title="Test Title"
        subtitle="Test Subtitle"
        ctaText="Click Here"
        ctaLink="/test"
      />
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Click Here/i })).toHaveAttribute(
      "href",
      "/test"
    );
  });
});
