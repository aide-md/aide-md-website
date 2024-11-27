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
    logo: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
}

const ValuePage: React.FC<ValuePageProps> = ({ data }) => {
  return (
    <Layout logo={data.logo.childImageSharp.gatsbyImageData}>
      <Hero
        title="What we give you"
        subtitle="Learn about our value"
        ctaText="Get convinced"
        ctaLink="/proposition"
      />

      <Section>
        <h2>Co możesz zyskać?</h2>
        <p>
          Dzięki innowacyjnemu modelowi dystrybucji, oferujemy nasze rozwiązanie
          również bezpośrednio użytkownikom końcowym, co pozwala na łatwe i szybkie
          wdrożenie bez konieczności przechodzenia przez skomplikowane procedury
          przetargowe.
          <br />
          ...
        </p>
      </Section>

      <TeamSectionWrapper>
        <h2>Meet Our Team</h2>
        <Image
          imageData={data.teamImage.childImageSharp.gatsbyImageData}
          alt="Aide MD medical team"
        />
      </TeamSectionWrapper>

      <Section>
        <h2>Our Logo</h2>
        <Image
          imageData={data.logo.childImageSharp.gatsbyImageData}
          alt="Aide MD logo"
        />
      </Section>
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
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 200)
      }
    }
  }
`;
