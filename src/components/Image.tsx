import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";

const StyledImage = styled(GatsbyImage)`
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

interface ImageProps {
  imageData: ImageDataLike | null;
  alt: string;
}

export const Image: React.FC<ImageProps> = ({ imageData, alt }) => {
  const image = getImage(imageData);

  if (!image) {
    return <p>Image not found</p>;
  }

  return <StyledImage image={image} alt={alt} />;
};
