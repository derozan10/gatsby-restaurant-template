import React from "react";
import styled from "styled-components";
import "animate.css";

const StyledMenuItem = styled.div`
  padding: 10px;
  h2 {
    cursor: pointer;
  }
  p:nth-of-type(1) {
    margin: 0;
  }
  p.description {
    color: #6fb526;
    margin: 0;
  }
`;

const MenuItem = ({ menuInDetail }) => {
  const menuName = Object.keys(menuInDetail)[0];

  const menuItems = menuInDetail[menuName].map(menuItem => {
    if (menuItem.benaming) {
      return (
        <div key={`${menuName} ${menuItem.benaming}`}>
          <p>{menuItem.benaming}</p>
          {Object.prototype.hasOwnProperty.call(menuItem, "omschrijving") && (
            <p className="description">{menuItem.omschrijving}</p>
          )}
        </div>
      );
    }

    const subCategoryName = Object.keys(menuItem)[0];
    return (
      <div key={subCategoryName}>
        <h4>{subCategoryName}</h4>
        {menuItem[subCategoryName].map(subCategoryItem => (
          <div key={`${subCategoryName}_${subCategoryItem.benaming}`}>
            <p>{subCategoryItem.benaming}</p>
            {Object.prototype.hasOwnProperty.call(
              subCategoryItem,
              "omschrijving"
            ) && <p className="description">{subCategoryItem.omschrijving}</p>}
          </div>
        ))}
      </div>
    );
  });

  return (
    <StyledMenuItem>
      <h3>{menuName}</h3>
      {menuItems}
    </StyledMenuItem>
  );
};

export default MenuItem;
