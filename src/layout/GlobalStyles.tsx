// src/styles/GlobalStyles.ts
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* Target the body styles */
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f9f9f9; /* Light background for a clean look */
    color: #333; /* Default text color */
  }

  h1, h2, h3, h4, h5, h6 {
    color: #00796b; /* Brand color for headings */
  }

  a {
    color: #00796b; /* Link color */
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    line-height: 1.6;
  }

  /* Add any other global styles */
`;
