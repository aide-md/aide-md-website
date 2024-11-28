import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";

import { Layout } from "../layout";
import { SEO } from "../components/SEO";
import { DataImage } from "../types/image";
import { FaqView } from "../views/faq";

interface FAQPageProps extends PageProps {
  data: {
    teamImage: DataImage;
    logo: DataImage;
  };
}

const FAQPage: React.FC<FAQPageProps> = ({ data }) => {
  return (
    <Layout logo={data.logo.childImageSharp.gatsbyImageData}>
      <FaqView
        images={{
          teamImage: data.teamImage.childImageSharp.gatsbyImageData,
        }}
      />
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
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 40)
      }
    }
  }
`;
