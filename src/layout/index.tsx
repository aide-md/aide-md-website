import React from "react";
import styled from "styled-components";
import { ImageDataLike } from "gatsby-plugin-image";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { GlobalStyles } from "./GlobalStyles";

const Main = styled.main`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f9f9f9;
  min-height: 80vh;
`;

interface LayoutProps {
  logo: ImageDataLike | null;
}

export const Layout: React.FCC<LayoutProps> = ({ children, logo }) => {
  return (
    <>
      <GlobalStyles />
      <Header logo={logo} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
