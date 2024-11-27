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

interface TryItPageProps extends PageProps {
  data: {
    teamImage: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
}

const TryItPage: React.FC<TryItPageProps> = ({ data }) => {
  return (
    <Layout>
      <Hero
        title="Przekonaj się"
        subtitle="Wypróbuj nasze rozwiązanie"
        ctaText="TRY IT"
        ctaLink="https://aide-md-app.azurewebsites.net/"
      />

      <Section>
        <h2>Przetestuj!</h2>
        <p>
 Zobacz, o ile łatwiejsze i szybsze będzie przygotowywanie notatek przy użyciu naszej aplikacji!
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

export default TryItPage;

export const Head: HeadFC = () => (
  <SEO
    title="About Aide MD"
    name="Aide MD"
    content="Learn more about Aide MD"
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
        gatsbyImageData(layout: FIXED, width: 300)
      }
    }
  }
`;
