import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";

const StyledImage = styled(GatsbyImage)`
  border-radius: ${({ theme }) => theme.radius.s};
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
