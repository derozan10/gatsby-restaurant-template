import React from "react";
import MenuNav from "../../components/MenuNav";
import WijnDetail from "../../components/WijnDetail";

const Wijn = ({ data }) => {
  const wijnArray = data.allContentfulWijnen.edges;
  const witteWijnen = wijnArray.filter(wijn => wijn.node.type === "Wit");
  const rodeWijnen = wijnArray.filter(wijn => wijn.node.type === "Rood");
  const roseWijnen = wijnArray.filter(wijn => wijn.node.type === "Rosé");

  return (
    <div>
      <MenuNav />
      <WijnDetail titel="Witte Wijnen" wijnData={witteWijnen} />
      <WijnDetail titel="Rode Wijnen" wijnData={rodeWijnen} />
      <WijnDetail titel="Rosé Wijnen" wijnData={roseWijnen} />
    </div>
  );
};

export default Wijn;

export const WijnQuery = graphql`
  query WijnQuery {
    allContentfulWijnen {
      edges {
        node {
          type
          naam
          streek
          prijs
        }
      }
    }
  }
`;
