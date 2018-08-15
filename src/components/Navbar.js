import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const StyledNav = styled.nav`
  background: #fff;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 1.45rem;
  #navItems {
    margin: 0 auto;
    max-width: 960;
    padding: 1.45rem 1.0875rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
      display: inline-block;
      color: #be1e0c;
      text-decoration: none;
      font-size: 20px;
      font-family: sans-serif;
    }
  }
`;

const Navbar = () => (
  <StyledNav>
    <div id="navItems">
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/fotos">Foto&apos;s</Link>
    </div>
  </StyledNav>
);

export default Navbar;
