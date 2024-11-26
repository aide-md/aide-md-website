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
    <Layout>
      <Hero
        title="What are we improving"
        subtitle="Can we convince you?"
        ctaText="Let us convince you"
        ctaLink="/gain"
      />

      <Section>
        <h2>What you get</h2>
        <p>
       

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
    title="What you get"
    name="Aide MD"
    content="Learn more about value you get"
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
