import React from "react";
import styled from "styled-components";
import { Button } from "../../../components/Button";
import { ImageDataLike } from "gatsby-plugin-image";
import { Image } from "../../../components/Image";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 120px;
  padding: 80px 0;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const Heading = styled.h1`
  margin-bottom: 32px;
  font-size: 64px;
  font-weight: bold;
`;

const Description = styled.p`
  color: grey;
  margin-bottom: 32px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-bottom: 32px;
`;

const CreditsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CreditsImageWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 16px;
`;

const CreditsTitle = styled.h4`
  font-weight: normal;
  margin-bottom: 8px;
`;

const CreditsDescription = styled.p`
  font-weight: light;
  color: grey;
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

interface IntroSectionProps {
  images: {
    placeholderImage: ImageDataLike | null;
    icon: ImageDataLike | null;
  };
}

export const IntroSection: React.FC<IntroSectionProps> = ({ images }) => {
  const handleTestAppClick = () => {
    console.log("test app click");
  };

  const handleContactUsClick = () => {
    console.log("contact us click");
  };

  return (
    <Wrapper>
      <ContentWrapper>
        <Heading>Lekarz leczy, technologia AI tworzy notatki</Heading>
        <Description>
          Noa Notes odciąży Cię w notowaniu w trakcie wizyty, a Ty zyskasz
          więcej czasu, lepszą interakcję z pacjentem i dokładniejszą
          dokumentację
        </Description>
        <ButtonsWrapper>
          <Button size="xl" onClick={handleTestAppClick}>
            Test app
          </Button>
          <Button size="xl" onClick={handleContactUsClick}>
            contact us
          </Button>
        </ButtonsWrapper>
        <CreditsWrapper>
          <CreditsImageWrapper>
            <Image imageData={images.icon} alt="Credit image" />
          </CreditsImageWrapper>
          <div>
            <CreditsTitle>Stworzony przez Aide md</CreditsTitle>
            <CreditsDescription>
              któremu zaufało ponad 70 000 lekarzy w Polsce
            </CreditsDescription>
          </div>
        </CreditsWrapper>
      </ContentWrapper>
      <ImageWrapper>
        <Image imageData={images.placeholderImage} alt="Intro image" />
      </ImageWrapper>
    </Wrapper>
  );
};
