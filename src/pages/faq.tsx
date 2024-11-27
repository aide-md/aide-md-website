import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import styled from "styled-components";

import { Layout } from "../layout";
import { SEO } from "../components/SEO";
import { Hero } from "../components/Hero";
import { Image } from "../components/Image";

const Section = styled.section`
  margin: 40px 0;
  padding: 20px;
`;

const TeamSectionWrapper = styled.div`
  margin: 40px 0;
`;

interface FAQPageProps extends PageProps {
  data: {
    teamImage: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
}

const FAQPage: React.FC<FAQPageProps> = ({ data }) => {
  return (
    <Layout >
      <Hero
        title="Q&A"
        subtitle="Pytania i odpowiedzi"
        ctaText="Masz więcej pytań?"
        ctaLink="/contact"
      />

<Section>
  <h2>FAQ</h2>
  <ul>
    <li>
      Dzięki innowacyjnemu modelowi dystrybucji, oferujemy nasze rozwiązanie 
      również bezpośrednio użytkownikom końcowym, co pozwala na łatwe i szybkie 
      wdrożenie bez konieczności przechodzenia przez skomplikowane procedury przetargowe.
    </li>
    <li>
      Nasza aplikacja jest także niezależna od konkretnego dostawcy systemu EDM, 
      co umożliwia jej zastosowanie w różnych placówkach, niezależnie od systemów 
      informatycznych, z których korzystają.
    </li>
    <li>
      Wysoka jakość wygenerowanych notatek, dzięki dostrojonemu modelowi.
    </li>
    <li>
      Brak konieczności poprawiania notatek, co daje dalsze oszczędności na czasie.
    </li>
    <li>
      Najwyższe bezpieczeństwo.
    </li>
    <li>
      Uruchomienie modelu językowego na stosunkowo niewielkiej jednostce 
      obliczeniowej, którą można umieścić w serwerowni szpitala lub przychodni, 
      radykalnie ogranicza możliwość wycieku szczególnie wrażliwych danych medycznych.
    </li>
    <li>
      Podmioty przetwarzające wrażliwe dane są często ofiarami ataków hackerów, 
      którzy np. żądają okupu wartości nawet wielu milionów dolarów za wykradzione 
      dane pacjentów. Przechowywanie ich wyłącznie na wewnętrznym serwerze znacznie 
      ogranicza możliwość kradzieży.
    </li>
    <li>
      Wyjątkowa, liczona w pojedynczych sekundach, prędkość tworzenia notatek medycznych.
    </li>
    <li>
      Dostarczanie urządzenia przystosowanego do nagrywania w warunkach oddziału szpitalnego.
      Nie zawsze mikrofon wbudowany w smartfon lub komputer wystarczy do skutecznego 
      nagrywania dźwięku. Dzięki klinicznemu doświadczeniu członków naszego zespołu wiemy, 
      że niezbędne jest, żeby móc zbierać dane zarówno przy biurku, jak i przy łóżku pacjenta. 
      Dlatego planujemy oferować urządzenie, z którego można korzystać mając ręce wolne i 
      podczas przemieszczania się.
    </li>
    <li>
      Intuicyjny interfejs, budowany od samego początku przy aktywnym udziale użytkowników 
      końcowych z pełnym zrozumieniem dla ich wyjątkowych potrzeb wynikających ze szczególnej 
      demografii oraz warunków pracy, obliczony na maksymalną prostotę i intuicyjność użytkowania.
    </li>
    <li>
      Niskie koszty operacyjne dzięki modelowi nie wymagającemu drogiej infrastruktury komputerowej.
    </li>
    <li>
      Uzupełnianie skal medycznych. Nasze rozwiązanie wspiera lekarza w mozolnym wpisywaniu 
      wartości wielu wskaźników w celu skorzystania z narzędzi przydatnych w procesie diagnostycznym.
    </li>
    <li>
      Przywoływanie adekwatnych źródeł wiedzy. Nasze rozwiązanie analizuje transkrypt wywiadu 
      i przedstawia lekarzowi adekwatne źródło wiedzy (np. aktualne wytyczne towarzystw naukowych), 
      które może pomóc mu w procesie diagnostycznym bądź planowaniu leczenia.
    </li>
    <li>
      Innowacyjny sposób dystrybucji umożliwiający zakup usługi również bezpośrednio lekarzom, 
      niezależnie od zatrudniającej ich placówki.
    </li>
  </ul>
</Section>



      <TeamSectionWrapper>
        <h2>Meet Our Team</h2>
        <Image
          imageData={data.teamImage.childImageSharp.gatsbyImageData}
          alt="Aide MD medical team"
        />
      </TeamSectionWrapper>
    </Layout>
  );
};

export default FAQPage;

export const Head: HeadFC = () => (
  <SEO
    title="FAQ"
    name="Aide MD"
    content="Let us answer some questions"
    lang="pl"
  />
);

export const query = graphql`
  query {
    teamImage: file(relativePath: { eq: "team.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 600)
      }
    }
  }
`;
