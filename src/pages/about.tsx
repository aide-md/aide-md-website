import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";

import { Layout } from "../layout";
import { SEO } from "../components/SEO";
import { DataImage } from "../types/image";
import { AboutView } from "../views/about";

interface AboutPageProps extends PageProps {
  data: {
    logo: DataImage;
    flags: DataImage;
    aboutImage: DataImage;
  };
}

const AboutPage: React.FC<AboutPageProps> = ({ data }) => {
  return (
    <Layout
      logo={data.logo.childImageSharp.gatsbyImageData}
      flags={data.flags.childImageSharp.gatsbyImageData}
    >
      <AboutView image={data.aboutImage.childImageSharp.gatsbyImageData} />
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
    aboutImage: file(relativePath: { eq: "vials.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, height: 700)
      }
    }
  }
`;
