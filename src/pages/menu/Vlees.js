import React from "react";
import MenuNav from "../../components/MenuNav";

const Vlees = ({ data }) => {
  const vleesArray = data.allContentfulGerechten.edges;

  return (
    <div>
      <MenuNav />
      {vleesArray.map(vlees => (
        <div className="menuItem" key={vlees.node.omschrijving}>
          <p>
            {vlees.node.omschrijving}
            {vlees.node.prijs !== null && (
              <span style={{ float: "right" }}>&euro; {vlees.node.prijs}</span>
            )}
          </p>
          {vlees.node.ingredienten !== null && (
            <p className="ingredienten">
              {vlees.node.ingredienten.map(ingredient => `${ingredient} `)}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export const VleesQuery = graphql`
  query VleesQuery {
    allContentfulGerechten(filter: { type: { regex: "/Vlees/" } }) {
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

export default Vlees;
