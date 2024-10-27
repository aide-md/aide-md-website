import React from "react";
import styled from "styled-components";

const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 20px;
  background-color: #e0f7fa;
  color: #00796b;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 15px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const HeroCTA = styled.a`
  background-color: #00796b;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    background-color: #005f56;
  }
`;

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
}) => {
  return (
    <HeroWrapper>
      <HeroTitle>{title}</HeroTitle>
      <HeroSubtitle>{subtitle}</HeroSubtitle>
      <HeroCTA href={ctaLink}>{ctaText}</HeroCTA>
    </HeroWrapper>
  );
};
