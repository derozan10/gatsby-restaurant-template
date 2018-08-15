import React from "react";
import MenuNav from "../../components/MenuNav";

const Pasta = ({ data }) => {
  const pastaArray = data.allContentfulGerechten.edges;

  return (
    <div>
      <MenuNav />
      {pastaArray.map(pasta => (
        <div className="menuItem" key={pasta.node.omschrijving}>
          <p>
            {pasta.node.omschrijving}
            {pasta.node.prijs !== null && (
              <span style={{ float: "right" }}>&euro; {pasta.node.prijs}</span>
            )}
          </p>
          {pasta.node.ingredienten !== null && (
            <p className="ingredienten">
              {pasta.node.ingredienten.map(ingredient => `${ingredient} `)}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export const PastaQuery = graphql`
  query PastaQuery {
    allContentfulGerechten(filter: { type: { regex: "/Pasta/" } }) {
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

export default Pasta;
