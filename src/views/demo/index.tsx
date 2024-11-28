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

interface DemoViewProps {
  images: {
    teamImage: ImageDataLike | null;
  };
}

export const DemoView: React.FC<DemoViewProps> = ({ images }) => {
  return (
    <>
      <Hero
        title="Przekonaj się"
        subtitle="Wypróbuj nasze rozwiązanie"
        ctaText="TRY IT"
        ctaLink="https://aide-md-app.azurewebsites.net/"
      />

      <Section>
        <h2>Przetestuj!</h2>
        <p>
          Zobacz, o ile łatwiejsze i szybsze będzie przygotowywanie notatek przy
          użyciu naszej aplikacji!
        </p>
      </Section>

      <TeamSectionWrapper>
        <h2>Meet Our Team</h2>
        <Image imageData={images.teamImage} alt="Aide MD medical team" />
      </TeamSectionWrapper>
    </>
  );
};
