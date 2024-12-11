import React from "react";
import styled from "styled-components";

import { Hero } from "../../components/Hero";
import { Button } from "../../components/Button";

const Section = styled.section``;

const List = styled.ul`
  margin-bottom: ${({ theme }) => theme.spacing.m};
`;

const Text = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.l};
`;

interface PropositionView {}

export const PropositionView: React.FC<PropositionView> = () => {
  const handleCheckClick = () => {
    console.log("check click");
  };

  return (
    <Section>
      <Hero
        title="Zmień wyzwania w przewagę z Automatycznym Asystentem Medycznym"
        subtitle="Twoja placówka zasługuje na rozwiązania, które wspierają rozwój i efektywność. Dlaczego warto zaufać AAM?"
        ctaText="Daj się przekonać!"
        ctaLink="/proposition"
      />

      <h2>Nasze przewagi:</h2>
      <List>
        <li>
          Czas to zdrowie: Automatyzacja dokumentacji oszczędza nawet 30 minut
          na wizytę.
        </li>
        <li>
          Bezpieczeństwo bez kompromisów: Pełna zgodność z RODO i opcja pracy
          offline.
        </li>
        <li>
          Integracja bez wysiłku: Dostosowanie do istniejących systemów EDM –
          brak potrzeby ich wymiany.
        </li>
        <li>
          Efektywność i zadowolenie: Większa liczba wizyt, krótsze kolejki i
          bardziej zadowoleni pacjenci.
        </li>
      </List>
      <Text>
        Dołącz do liderów, którzy już wybrali Automatycznego Asystenta
        Medycznego. Zmień sposób pracy na lepsze.
      </Text>
      <Button onClick={handleCheckClick}>
        Sprawdź, jak możemy pomóc Twojej placówce
      </Button>
    </Section>
  );
};
