// src/styles/GlobalStyles.ts
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: ${({ theme }) => theme.colors.ghostWhite};
    color: ${({ theme }) => theme.colors.white};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.secondary};
    margin: 0;
  }

  a {
    color: #00796b; /* Link color */
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  p, li {
    line-height: 1.6;
    margin: 0;
    color: ${({ theme }) => theme.colors.grey}
  }
`;
