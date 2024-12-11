import React from "react";
import { Link } from "gatsby";
import styled, { ThemeProvider } from "styled-components";
import { Image } from "./Image";
import { ImageDataLike } from "gatsby-plugin-image";
import { Button } from "./Button";

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0 20px;
  color: #ffffff;
  display: grid;
  place-items: center;
  height: 80px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
`;

const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  margin: 0 15px;
  font-size: 1.1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const NavLinksWithLogo = styled.div`
  display: flex;
  align-items: center;

  &:first-child {
    margin-right: ${({ theme }) => theme.spacing.m};
  }
`;

interface HeaderProps {
  logo: ImageDataLike | null;
}

export const Header: React.FC<HeaderProps> = ({ logo }) => {
  const handleTestAppClick = () => {
    console.log("Test Aide click");
  };

  return (
    <HeaderWrapper>
      <Nav>
        <NavLinksWithLogo>
          <Image imageData={logo} alt="logo" />
          <NavLink to="/">Główna</NavLink>
          <NavLink to="/about">O nas</NavLink>
          <NavLink to="/proposition">Czemu my?</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/demo">Przekonaj się!</NavLink>
          <NavLink to="/contact">Kontakt</NavLink>
        </NavLinksWithLogo>
        <Button variant="secondary" onClick={handleTestAppClick}>
          Przetestuj
        </Button>
      </Nav>
    </HeaderWrapper>
  );
};
