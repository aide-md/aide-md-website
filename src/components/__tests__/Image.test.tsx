import React from "react";
import { render, screen } from "@testing-library/react";
import { Image } from "../Image";
import { IGatsbyImageData } from "gatsby-plugin-image";
import "@testing-library/jest-dom";

describe("Image Component", () => {
  const imageData: IGatsbyImageData = {
    images: {
      fallback: {
        src: "images/team.jpg",
        srcSet: "team.jpg 1x",
        sizes: "100vw",
      },
      sources: [],
    },
    layout: "constrained",
    width: 600,
    height: 400,
  };

  it("renders an image with the correct alt text", () => {
    render(<Image imageData={imageData} alt="Test Image" />);

    const imgElement = screen.getByAltText("Test Image");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("alt", "Test Image");
  });
});
