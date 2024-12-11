import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";

import { Layout } from "../layout";
import { SEO } from "../components/SEO";
import { DataImage } from "../types/image";
import { DemoView } from "../views/demo";

interface DemoPageProps extends PageProps {
  data: {
    teamImage: DataImage;
    logo: DataImage;
    flags: DataImage;
  };
}

const DemoPage: React.FC<DemoPageProps> = ({ data }) => {
  return (
    <Layout
      logo={data.logo.childImageSharp.gatsbyImageData}
      flags={data.flags.childImageSharp.gatsbyImageData}
    >
      <DemoView
        images={{
          teamImage: data.teamImage.childImageSharp.gatsbyImageData,
        }}
      />
    </Layout>
  );
};

export default DemoPage;

export const Head: HeadFC = () => (
  <SEO title="Try Aide MD" name="Aide MD" content="Try Aide MD app" lang="pl" />
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
