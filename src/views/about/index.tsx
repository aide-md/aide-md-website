import React from "react";
import styled from "styled-components";
import { ImageDataLike } from "gatsby-plugin-image";

import { Hero } from "../../components/Hero";
import { Image } from "../../components/Image";

const Section = styled.section`
  margin: 40px 0;
  padding: 20px;
`;

const TeamSectionWrapper = styled.div`
  margin: 40px 0;
`;

interface AboutViewProps {
  images: {
    teamImage: ImageDataLike | null;
  };
}

export const AboutView: React.FC<AboutViewProps> = ({ images }) => {
  return (
    <>
      <Hero
        title="About Aide MD"
        subtitle="Learn more about our mission to provide quality medical assistance."
        ctaText="Contact Us"
        ctaLink="/contact"
      />

      <Section>
        <h2>Our Mission</h2>
        <p>
          At Aide MD, we strive to offer the best healthcare solutions through a
          seamless and accessible platform. Our mission is to connect patients
          with qualified medical professionals, ensuring quality care at your
          fingertips.
        </p>
      </Section>

      <TeamSectionWrapper>
        <h2>Meet Our Team</h2>
        <Image imageData={images.teamImage} alt="Aide MD medical team" />
      </TeamSectionWrapper>
    </>
  );
};
