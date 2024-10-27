import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #00796b;
  color: white;
  padding: 20px;
  text-align: center;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <p>© {new Date().getFullYear()} Medical App. All Rights Reserved.</p>
    </FooterWrapper>
  );
};
