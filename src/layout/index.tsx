import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { ImageDataLike } from "gatsby-plugin-image";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { GlobalStyles } from "./GlobalStyles";
import { theme } from "../theme";
import { Image } from "../components/Image";

const Main = styled.main`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f9f9f9;
  height: 100%;
  min-height: calc(100vh - 432px);
`;

const FlagsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.l};
`;

interface LayoutProps {
  logo: ImageDataLike | null;
  flags: ImageDataLike | null;
}

export const Layout: React.FCC<LayoutProps> = ({ children, logo, flags }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header logo={logo} />
      <Main>{children}</Main>
      <FlagsWrapper>
        <Image imageData={flags} alt="" />
      </FlagsWrapper>
      <Footer />
    </ThemeProvider>
  );
};
