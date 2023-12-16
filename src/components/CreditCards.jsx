import React from "react";
import CardBack from "./CardBack";
import CardFront from "./CardFront";

function CreditCards() {
  return (
    <div className="credit-cards relative">
      <CardBack />
      <CardFront />
    </div>
  );
}

export default CreditCards;
