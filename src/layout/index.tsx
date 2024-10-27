import React from "react";
import styled from "styled-components";

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

export const Layout: React.FCC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
