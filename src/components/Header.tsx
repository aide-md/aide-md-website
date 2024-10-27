import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: #00796b;
  padding: 15px 20px;
  color: #ffffff;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
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

export const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>
    </HeaderWrapper>
  );
};
