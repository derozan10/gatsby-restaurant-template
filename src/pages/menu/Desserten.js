import React from "react";
import MenuNav from "../../components/MenuNav";

const Desserten = ({ data }) => {
  const dessertArray = data.allContentfulGerechten.edges;

  return (
    <div>
      <MenuNav />
      {dessertArray.map(dessert => {
        return (
          <div className="menuItem" key={dessert.node.omschrijving}>
            <p>
              {dessert.node.omschrijving}
              {dessert.node.prijs !== null && (
                <span style={{ float: "right" }}>&euro; {dessert.node.prijs}</span>
              )}
            </p>
            {dessert.node.ingredienten !== null && (
              <p className="ingredienten">
                {dessert.node.ingredienten.map(ingredient => `${ingredient} `)}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export const DessertQuery = graphql`
  query DessertQuery {
    allContentfulGerechten(filter: { type: { regex: "/Desserten/" } }) {
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

export default Desserten;
