import React, { useContext } from "react";
import { CardContext } from "../store/CardContext";

function CardBack() {
  const { cvc } = useContext(CardContext);

  return (
    <div className="card-back">
      <p>{cvc === "" || cvc === 0 ? "000" : cvc}</p>
    </div>
  );
}

export default CardBack;
