import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";

import { Layout } from "../layout";
import { SEO } from "../components/SEO";
import { DataImage } from "../types/image";
import { PropositionView } from "../views/proposition";

interface ValuePageProps extends PageProps {
  data: {
    logo: DataImage;
    flags: DataImage;
  };
}

const ValuePage: React.FC<ValuePageProps> = ({ data }) => {
  return (
    <Layout
      logo={data.logo.childImageSharp.gatsbyImageData}
      flags={data.flags.childImageSharp.gatsbyImageData}
    >
      <PropositionView />
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
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 100)
      }
    }
    flags: file(relativePath: { eq: "flags.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, height: 60)
      }
    }
  }
`;
