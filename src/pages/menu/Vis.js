import React from "react";
import MenuNav from "../../components/MenuNav";

const Vis = ({ data }) => {
  const visArray = data.allContentfulGerechten.edges;

  return (
    <div>
      <MenuNav />
      {visArray.map(vis => (
        <div className="menuItem" key={vis.node.omschrijving}>
          <p>
            {vis.node.omschrijving}
            {vis.node.prijs !== null && (
              <span style={{ float: "right" }}>&euro; {vis.node.prijs}</span>
            )}
          </p>
          {vis.node.ingredienten !== null && (
            <p className="ingredienten">
              {vis.node.ingredienten.map(ingredient => `${ingredient} `)}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export const VisQuery = graphql`
  query VisQuery {
    allContentfulGerechten(filter: { type: { regex: "/Vis/" } }) {
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

export default Vis;
