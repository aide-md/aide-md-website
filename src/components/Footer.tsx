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
      <p>© {new Date().getFullYear()} Projekt „Platforma Startowa Unicorn Hub – Edycja II” współfinansowany ze środków Unii Europejskiej w ramach programu Fundusze Europejskie dla Polski Wschodniej 2021-2027, Priorytet FEPW.01 Przedsiębiorczość i Innowacje, Działanie FEPW.01.01 Platformy startowe dla nowych pomysłów, Komponent I Inkubacja – rozwój nowego pomysłu biznesowego.</p>
    </FooterWrapper>
  );
};
