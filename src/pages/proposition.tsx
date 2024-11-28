import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";

import { Layout } from "../layout";
import { SEO } from "../components/SEO";
import { DataImage } from "../types/image";
import { PropositionView } from "../views/proposition";

interface ValuePageProps extends PageProps {
  data: {
    teamImage: DataImage;
    logo: DataImage;
  };
}

const ValuePage: React.FC<ValuePageProps> = ({ data }) => {
  return (
    <Layout logo={data.logo.childImageSharp.gatsbyImageData}>
      <PropositionView
        images={{
          teamImage: data.teamImage.childImageSharp.gatsbyImageData,
        }}
      />
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
        gatsbyImageData(layout: CONSTRAINED, width: 40)
      }
    }
  }
`;
