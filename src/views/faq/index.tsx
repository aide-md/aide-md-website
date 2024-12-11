import React from "react";
import styled from "styled-components";
import { ImageDataLike } from "gatsby-plugin-image";

import { Hero } from "../../components/Hero";
import { Image } from "../../components/Image";

const Section = styled.section``;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const List = styled.ul`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

interface FaqViewProps {
  faqImage: ImageDataLike | null;
}

export const FaqView: React.FC<FaqViewProps> = ({ faqImage }) => {
  return (
    <Section>
      <Wrapper>
        <div>
          <h1>Masz pytania? Mamy odpowiedzi.</h1>
          <List>
            <li>
              Jak działa Automatyczny Asystent Medyczny? Nagrywa wizyty,
              automatycznie transkrybuje rozmowy i generuje gotowe notatki
              medyczne, które można łatwo zintegrować z systemem EDM.
            </li>
            <li>
              Czy dane są bezpieczne? Absolutnie! AAM spełnia najwyższe
              standardy bezpieczeństwa danych, a opcja pracy offline zapewnia
              pełną kontrolę nad danymi.
            </li>
            <li>
              Czy narzędzie jest kompatybilne z moim EDM? Tak! AAM współpracuje
              z większością popularnych systemów elektronicznej dokumentacji
              medycznej.
            </li>
            <li>
              Czy mogę przetestować narzędzie przed zakupem? Tak, oferujemy
              darmowy okres próbny, abyś mógł przekonać się o wartości naszego
              rozwiązania.
            </li>
            <li>
              Czy moi lekarze będą potrzebowali szkoleń? Nie, AAM jest
              intuicyjny i prosty w obsłudze. Dodatkowo zapewniamy wsparcie
              techniczne w razie potrzeby.
            </li>
          </List>
        </div>
        <Image imageData={faqImage} alt="" />
      </Wrapper>
      <Hero
        title="Masz inne pytania?"
        ctaText="Skontaktuj się z nami"
        ctaLink="/contact"
      />
    </Section>
  );
};
