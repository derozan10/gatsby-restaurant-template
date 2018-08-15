import React from "react";

const WijnDetail = ({ wijnData, titel }) => {
  return (
    <div>
      <h3>{titel}</h3>
      {wijnData.map(wijn => (
        <div key={`${wijn.node.naam}_${wijn.node.streek}`}>
          <p>
            {wijn.node.naam} - {wijn.node.streek}{" "}
            {wijn.node.prijs !== null && (
              <span style={{ float: "right" }}>&euro; {wijn.node.prijs}</span>
            )}
          </p>
        </div>
      ))}
      <hr />
    </div>
  );
};

export default WijnDetail;
