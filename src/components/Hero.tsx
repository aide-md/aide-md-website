import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radius.m};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.m};
  color: ${({ theme }) => theme.colors.ghostWhite};
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: ${({ theme }) => theme.spacing.l};
  color: ${({ theme }) => theme.colors.white};
`;

const HeroList = styled.ul`
  margin-bottom: ${({ theme }) => theme.spacing.l};
`;

const HeroListItem = styled.li`
  color: ${({ theme }) => theme.colors.white};
`;

interface HeroProps {
  title: string;
  subtitle?: string;
  bullets?: string[];
  ctaText: string;
  ctaLink: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  bullets,
  ctaText,
  ctaLink,
}) => {
  const handleGetStartedClick = () => {
    console.log("started");
  };

  return (
    <HeroWrapper>
      <HeroTitle>{title}</HeroTitle>
      {subtitle && <HeroSubtitle>{subtitle}</HeroSubtitle>}
      {bullets?.length && (
        <HeroList>
          {bullets.map((bullet) => (
            <HeroListItem>{bullet}</HeroListItem>
          ))}
        </HeroList>
      )}
      <Button onClick={handleGetStartedClick} variant="secondary">
        {ctaText}
      </Button>
    </HeroWrapper>
  );
};
