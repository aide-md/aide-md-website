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

interface AboutPageProps extends PageProps {
  data: {
    teamImage: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
}

const AboutPage: React.FC<AboutPageProps> = ({ data }) => {
  return (
    <Layout>
      <Hero
        title="About Aide MD"
        subtitle="Learn more about our mission to provide quality medical assistance."
        ctaText="Contact Us"
        ctaLink="/contact"
      />

      <Section>
        <h2>Our Mission</h2>
        <p>
          At Aide MD, we strive to offer the best healthcare solutions through a
          seamless and accessible platform. Our mission is to connect patients
          with qualified medical professionals, ensuring quality care at your
          fingertips.
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

export default AboutPage;

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
  }
`;
