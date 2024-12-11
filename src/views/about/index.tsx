import React from "react";
import styled from "styled-components";

const Section = styled.section``;

const Heading = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing.l};
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.grey};
`;

interface AboutViewProps {}

export const AboutView: React.FC<AboutViewProps> = () => {
  return (
    <Section>
      <Heading>Innowacja w sercu medycyny</Heading>
      <Text>
        Jesteśmy zespołem wizjonerów, którzy łączą technologię z empatią.
        Wierzymy, że nowoczesne rozwiązania powinny ułatwiać życie zarówno
        lekarzom, jak i pacjentom. Naszym celem jest stworzenie świata, w którym
        dokumentacja medyczna przestaje być obciążeniem, a staje się wsparciem.
      </Text>
      <br />
      <Text>
        Automatyczny Asystent Medyczny to efekt wieloletnich badań i współpracy
        z praktykami z branży medycznej. Tworzymy narzędzia, które odpowiadają
        na realne potrzeby: od automatyzacji dokumentacji, po intuicyjność
        obsługi i pełne bezpieczeństwo danych.
      </Text>
      <br />
      <Text>
        Naszą misją jest uczynienie medycyny bardziej ludzką. Razem możemy
        zmienić sposób, w jaki działa Twoja placówka.
      </Text>
    </Section>
  );
};
