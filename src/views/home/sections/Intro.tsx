import React from "react";
import styled from "styled-components";
import { Button } from "../../../components/Button";
import { ImageDataLike } from "gatsby-plugin-image";
import { Image } from "../../../components/Image";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 120px;
  margin-bottom: 80px;
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
  color: ${({ theme }) => theme.colors.grey};
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

const CreditsTitle = styled.h3`
  font-weight: normal;
  margin-bottom: ${({ theme }) => theme.spacing.s};
`;

const CreditsDescription = styled.p`
  font-weight: light;
  color: ${({ theme }) => theme.colors.grey};
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
        <Heading>Rewolucja w dokumentacji medycznej zaczyna się tutaj</Heading>
        <Description>
          Pozwól lekarzom skupić się na pacjentach, a nie na papierach.
          Automatyczny Asystent Medyczny – przyszłość, która działa już dziś.
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
