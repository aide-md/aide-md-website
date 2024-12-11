import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";

import { Layout } from "../layout";
import { SEO } from "../components/SEO";
import { DataImage } from "../types/image";
import { ContactView } from "../views/contact";

interface ContactPageProps extends PageProps {
  data: {
    logo: DataImage;
    flags: DataImage;
  };
}

const ContactPage: React.FC<ContactPageProps> = ({ data }) => {
  return (
    <Layout
      logo={data.logo.childImageSharp.gatsbyImageData}
      flags={data.flags.childImageSharp.gatsbyImageData}
    >
      <ContactView />
    </Layout>
  );
};

export default ContactPage;

export const Head: HeadFC = () => (
  <SEO
    title="Contact Aide MD"
    name="Aide MD"
    content="Contact Aide MD for more informations"
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
