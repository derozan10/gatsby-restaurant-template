import React from "react";
import styled from "styled-components";
import Link, { push } from "gatsby-link";

const StyledMenuNav = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 1.45rem;
  a {
    text-decoration: none;
    cursor: pointer;
    color: #333;
    padding: 10px 20px;
    border-radius: 5px;
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 1.45rem;
`;

const routeToMenu = menu => {
  push(`/menu/${menu}`);
};

const MenuNav = () => {
  const activeCss = {
    backgroundColor: "#ce0000",
    color: "#fff"
  };

  const isMobile = window.innerWidth <= 576;
  if (isMobile) {
    return (
      <StyledSelect onChange={e => routeToMenu(e.target.value)}>
        <option value="Desserten">Desserten</option>
        <option value="Pasta">Pasta</option>
        <option value="Tapas">Tapas</option>
        <option value="Vlees">Vlees</option>
        <option value="Voorgerechten">Voorgerechten</option>
        <option value="Wijn">Wijn</option>
      </StyledSelect>
    );
  }
  return (
    <StyledMenuNav>
      <Link to="/menu/desserten" activeStyle={activeCss}>
        Desserten
      </Link>
      <Link to="/menu/pasta" activeStyle={activeCss}>
        Pasta
      </Link>
      <Link to="/menu/tapas" activeStyle={activeCss}>
        Tapas
      </Link>
      <Link to="/menu/vlees" activeStyle={activeCss}>
        Vlees
      </Link>
      <Link to="/menu/voorgerechten" activeStyle={activeCss}>
        Voorgerechten
      </Link>
      <Link to="/menu/wijn" activeStyle={activeCss}>
        Wijn
      </Link>
    </StyledMenuNav>
  );
};

export default MenuNav;
