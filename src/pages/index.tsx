import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import styled from "styled-components";

import { Layout } from "../layout";
import { SEO } from "../components/SEO";
import { Hero } from "../components/Hero";
import { ContactForm } from "../components/ContactForm";
import { Image } from "../components/Image";

const ImageSectionWrapper = styled.div`
  margin: 40px 0;
`;

interface IndexPageProps extends PageProps {
  data: {
    placeholderImage: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  return (
    <Layout>
      <Hero
        title="Welcome to Aide MD"
        subtitle="Your health is our priority. Find the best medical assistance today."
        ctaText="Get Started"
        ctaLink="/about"
      />

      <ImageSectionWrapper>
        <h2>Meet Our Team</h2>
        <Image
          imageData={data.placeholderImage.childImageSharp.gatsbyImageData}
          alt="Medical team"
        />
      </ImageSectionWrapper>

      <ContactForm />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <SEO title="Aide MD" name="Aide MD" content="Aide MD website" lang="pl" />
);

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "team.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 600)
      }
    }
  }
`;
