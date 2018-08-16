
import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

const StyledMenuNav = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 1.45rem;
  .menuNavItem {
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

const MenuNav = (props) => {

  const activeCss = {
    backgroundColor: "#ce0000",
    color: "#fff"
  };

  let isMobile = false;
  if (typeof window !== "undefined") {
    window.innerWidth <= 576 ? (isMobile = true) : (isMobile = false);
  }

  if (isMobile) {
    return (
      <StyledSelect onChange={e => props.menuChangedHandler(e.target.value)}>
        <option value="---">Maak een selectie</option>
        <option value="Tapas">Tapas</option>
        <option value="Voorgerechten">Voorgerechten</option>
        <option value="Pasta">Pasta</option>
        <option value="Vlees">Vlees</option>
        <option value="Desserten">Desserten</option>
        <option value="Wijn">Wijn</option>
      </StyledSelect>
    );
  }
  return (
    <StyledMenuNav>
      <div className="menuNavItem" onClick={() => props.menuChangedHandler("Tapas")}>
        Tapas
      </div>
      <div className="menuNavItem" onClick={() => props.menuChangedHandler("Voorgerechten")}>
        Voorgerechten
      </div>
      <div className="menuNavItem" onClick={() => props.menuChangedHandler("Pasta")}>
        Pasta
      </div>
      <div className="menuNavItem" onClick={() => props.menuChangedHandler("Vlees")}>
        Vlees
      </div>
      <div className="menuNavItem" onClick={() => props.menuChangedHandler("Desserten")}>
        Desserten
      </div>
      <div className="menuNavItem" onClick={() => props.menuChangedHandler("Wijn")}>
        Wijn
      </div>
    </StyledMenuNav>
  )

}

export default MenuNav;
