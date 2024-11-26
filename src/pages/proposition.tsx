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

interface ValuePageProps extends PageProps {
  data: {
    teamImage: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
}

const ValuePage: React.FC<ValuePageProps> = ({ data }) => {
  return (
    <Layout >
      <Hero
        title="What we give you"
        subtitle="Learn about our value"
        ctaText="Get convinced"
        ctaLink="/value"
      />

      <Section>
        <h2>Our Mission</h2>
        <p>
        Dzięki innowacyjnemu modelowi dystrybucji, oferujemy nasze rozwiązanie również bezpośrednio użytkownikom końcowym, co pozwala na łatwe i szybkie wdrożenie bez konieczności przechodzenia przez skomplikowane procedury przetargowe.
        Nasza aplikacja jest także niezależna od konkretnego dostawcy systemu EDM, co umożliwia jej zastosowanie w różnych placówkach, niezależnie od systemów informatycznych, z których korzystają
        Wysoka jakość wygenerowanych notatek, dzięki dostrojonemu modelowi.
Brak konieczności poprawiania notatek [Go1] , co daje dalsze oszczędności na czasie.
Najwyższe bezpieczeństwo.
Uruchomienie modelu językowego na stosunkowo niewielkiej jednostce obliczeniowej, którą można umieścić w serwerowni szpitala lub przychodni radykalnie ogranicza możliwość wycieku szczególnie wrażliwych danych medycznych (za ujawnienie danych medycznych Urząd Ochrony Danych Osobowych może nałożyć karę w wysokości do 10 lub 20 mln euro, albo do 2 % lub 4% całkowitego rocznego obrotu firmy z poprzedniego roku).
Podmioty przetwarzające wrażliwe dane są często ofiarami ataków hackerów, którzy np. żądają okupu wartości nawet wielu milionów dolarów za wykradzione dane pacjentów. Przechowywanie ich wyłącznie na wewnętrznym serwerze znacznie ogranicza możliwość kradzieży. [Go2] 
Wyjątkowa, liczona w pojedynczych sekundach, [Go3] prędkość tworzenia notatek medycznych. 
Dostarczanie urządzenia przystosowanego do nagrywania w warunkach oddziału szpitalnego.
Nie zawsze mikrofon wbudowany w smartfon lub komputer wystarczy do skutecznego nagrywania dźwięku. Dzięki klinicznemu doświadczeniu członków naszego zespołu wiemy, że niezbędne jest, żeby móc zbierać dane zarówno przy biurku jak i przy łóżku pacjenta. Dlatego planujemy oferować urządzenie, z którego można korzystać mając ręce wolne i podczas przemieszczania się.
Intuicyjny interfejs.
Budowany od samego początku przy aktywnym udziale użytkowników końcowych z pełnym zrozumieniem dla ich wyjątkowych potrzeb wynikających ze szczególnej demografii oraz warunków pracy, 
obliczony na maksymalną prostotę i intuicyjność użytkowania.
Niskie koszty operacyjne dzięki modelowi nie wymagającemu drogiej infrastruktury komputerowej .
Uzupełnianie skal medycznych
Nasze rozwiązanie wspiera lekarza w mozolnym wpisywaniu wartości wielu wskaźników w celu skorzystania z narzędzi przydatnych w procesie diagnostycznym.
Przywoływanie adekwatnych źródeł wiedzy.
Nasze rozwiązanie analizuje transkrypt wywiadu i przedstawia lekarzowi adekwatne źródło wiedzy (np. aktualne wytyczne towarzystw naukowych), które może pomóc mu w procesie diagnostycznym bądź planowaniu leczenia.
Innowacyjny sposób dystrybucji umożliwiając zakup usługi również bezpośrednio lekarzom, niezależnie od zatrudniającej ich placówki.


        </p>
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

export default ValuePage;

export const Head: HeadFC = () => (
  <SEO
    title="Value of Aide.MD"
    name="Aide MD"
    content="What can we give you"
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
