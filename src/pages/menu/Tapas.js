import React from "react";
import MenuNav from "../../components/MenuNav";

const Tapas = ({ data }) => {
  const tapasArray = data.allContentfulGerechten.edges;

  return (
    <div>
      <MenuNav />
      {tapasArray.map(tapas => (
        <div className="menuItem" key={tapas.node.omschrijving}>
          <p>
            {tapas.node.omschrijving}
            {tapas.node.prijs !== null && (
              <span style={{ float: "right" }}>&euro; {tapas.node.prijs}</span>
            )}
          </p>
          {tapas.node.ingredienten !== null && (
            <p className="ingredienten">
              {tapas.node.ingredienten.map(ingredient => `${ingredient} `)}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export const TapasQuery = graphql`
  query TapasQuery {
    allContentfulGerechten(filter: { type: { regex: "/Tapas/" } }) {
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

export default Tapas;
