import React from "react";
import WijnDetail from "./WijnDetail";

const Wijn = ({ data }) => {

  const witteWijnen = data.filter(wijn => wijn.node.type === "Wit");
  const rodeWijnen = data.filter(wijn => wijn.node.type === "Rood");
  const roseWijnen = data.filter(wijn => wijn.node.type === "Rosé");

  return (
    <div>
      <WijnDetail titel="Witte Wijnen" wijnData={witteWijnen} />
      <WijnDetail titel="Rode Wijnen" wijnData={rodeWijnen} />
      <WijnDetail titel="Rosé Wijnen" wijnData={roseWijnen} />
    </div>
  );
};

export default Wijn;


