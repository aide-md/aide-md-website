import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";

import { Layout } from "../layout";
import { SEO } from "../components/SEO";
import { DataImage } from "../types/image";
import { HomeView } from "../views/home";

import footerImage from "../images/footer.jpg";

export interface IndexPageProps extends PageProps {
  data: {
    placeholderImage: DataImage;
    logo: DataImage;
    icon: DataImage;
  };
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  return (
    <Layout logo={data.logo.childImageSharp.gatsbyImageData}>
      <HomeView
        images={{
          intro: {
            placeholderImage:
              data.placeholderImage.childImageSharp.gatsbyImageData,
            icon: data.icon.childImageSharp.gatsbyImageData,
          },
          test: {
            placeholderImage:
              data.placeholderImage.childImageSharp.gatsbyImageData,
          },
        }}
      />
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <img
          src={footerImage}
          alt="Footer"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
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
        gatsbyImageData(layout: CONSTRAINED, width: 500)
      }
    }
    logo: file(relativePath: { eq: "team.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 40)
      }
    }
    icon: file(relativePath: { eq: "icon.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 40)
      }
    }
  }
`;
