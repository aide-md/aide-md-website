import React from "react";
import styled from "styled-components";
import { ImageDataLike } from "gatsby-plugin-image";

import { Hero } from "../../components/Hero";
import { ContactForm } from "../../components/ContactForm";
import { Image } from "../../components/Image";
import { IntroSection } from "./sections/Intro";

const ImageSectionWrapper = styled.div`
  margin: 40px 0;
`;

interface HomeViewProps {
  images: {
    placeholderImage: ImageDataLike | null;
  };
}

export const HomeView: React.FC<HomeViewProps> = ({ images }) => {
  return (
    <>
      <IntroSection image={images.placeholderImage} />
      <Hero
        title="Welcome to Aide MD"
        subtitle="Your health is our priority. Find the best medical assistance today."
        ctaText="Get Started"
        ctaLink="/about"
      />

      <ImageSectionWrapper>
        <h2>Meet Our Team</h2>
        <Image imageData={images.placeholderImage} alt="Medical team" />
      </ImageSectionWrapper>

      <ContactForm />
    </>
  );
};
