import React from "react";
import styled from "styled-components";
import { ImageDataLike } from "gatsby-plugin-image";
import { Button } from "../../components/Button";

const Section = styled.section``;

const MainHeading = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing.m};
`;

const Text = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.l};
`;

const SecondaryHeading = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.m};
`;

interface DemoViewProps {
  images: {
    teamImage: ImageDataLike | null;
  };
}

export const DemoView: React.FC<DemoViewProps> = ({ images }) => {
  const handleDemoClick = () => {
    console.log("handleDemoClick");
  };

  return (
    <Section>
      <MainHeading>Gotowi na zmianę? Zacznij już dziś</MainHeading>
      <Text>
        Nie czekaj, aż inne placówki wyprzedzą Twoją. Wypróbuj Automatycznego
        Asystenta Medycznego za darmo i zobacz, jak uprościć pracę lekarzy,
        zwiększyć liczbę wizyt i poprawić organizację.
      </Text>
      <SecondaryHeading>Dlaczego warto?</SecondaryHeading>
      <ul>
        <li>Testuj bez ryzyka – darmowy okres próbny.</li>
        <li>Otrzymaj pełne wsparcie przy wdrożeniu.</li>
        <li>Zobacz efekty już od pierwszego dnia.</li>
      </ul>
      <Text>
        Technologia zmienia medycynę, a Twoja placówka może być w czołówce tej
        zmiany.
      </Text>
      <Button onClick={handleDemoClick}>Rozpocznij darmowy okres próbny</Button>
    </Section>
  );
};
