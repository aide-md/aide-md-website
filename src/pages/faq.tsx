import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";

import { Layout } from "../layout";
import { SEO } from "../components/SEO";
import { DataImage } from "../types/image";
import { FaqView } from "../views/faq";

interface FAQPageProps extends PageProps {
  data: {
    logo: DataImage;
    flags: DataImage;
  };
}

const FAQPage: React.FC<FAQPageProps> = ({ data }) => {
  return (
    <Layout
      logo={data.logo.childImageSharp.gatsbyImageData}
      flags={data.flags.childImageSharp.gatsbyImageData}
    >
      <FaqView />
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
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 80)
      }
    }
    flags: file(relativePath: { eq: "flags.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, height: 60)
      }
    }
  }
`;
