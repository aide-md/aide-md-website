import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import { Image } from "./Image";
import { ImageDataLike } from "gatsby-plugin-image";
import { Button } from "./Button";

const HeaderWrapper = styled.header`
  background-color: #00796b;
  padding: 15px 20px;
  color: #ffffff;
  display: grid;
  place-items: center;
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

const Logo = styled(Image)`
  width: 40px;
`;

const NavLinksWithLogo = styled.div`
  display: flex;
  align-items: center;
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
          <Logo imageData={logo} alt="logo" />
          {/* Home przedstawiamy produkt more or less */}
          <NavLink to="/">Główna</NavLink>
          {/* O nas, zespol, o produkcie */}
          <NavLink to="/about">O nas</NavLink>
          {/* Formularz */}
          <NavLink to="/contact">Kontakt</NavLink>
          <NavLink to="/proposition">Czemu my?</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/tryit">Przekonaj się!</NavLink>


        </NavLinksWithLogo>
        <Button variant="secondary" onClick={handleTestAppClick}>
          Test Aide
        </Button>
      </Nav>
    </HeaderWrapper>
  );
};

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "team.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 40)
      }
    }
  }
`;
