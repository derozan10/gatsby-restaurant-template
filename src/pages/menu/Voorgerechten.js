import React from "react";
import MenuNav from "../../components/MenuNav";

const Voorgerechten = ({ data }) => {
  const voorgerechtenArray = data.allContentfulGerechten.edges;

  return (
    <div>
      <MenuNav />
      {voorgerechtenArray.map(voorgerecht => {
        return (
          <div className="menuItem" key={voorgerecht.node.omschrijving}>
            <p>
              {voorgerecht.node.omschrijving}
              {voorgerecht.node.prijs !== null && (
                <span style={{ float: "right" }}>&euro; {voorgerecht.node.prijs}</span>
              )}
            </p>
            {voorgerecht.node.ingredienten !== null && (
              <p className="ingredienten">
                {voorgerecht.node.ingredienten.map(ingredient => `${ingredient} `)}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export const VoorgerechtenQuery = graphql`
  query VoorgerechtenQuery {
    allContentfulGerechten(filter: { type: { regex: "/Voorgerechten/" } }) {
      edges {
        node {
          omschrijving
          prijs
          ingredienten
        }
      }
    }
  }
`;

export default Voorgerechten;
