import React, { useContext } from "react";
import cardLogo from "../assets/images/card-logo.svg";
import { CardContext } from "../store/CardContext";

function CardFront() {
  const { holderName, cardNumber, expDate } = useContext(CardContext);

  const formattedCardNumber = cardNumber
    .toString()
    .slice(0, 16)
    .match(/.{1,4}/g)
    ?.join(" ");

  return (
    <div className="card-front">
      <div>
        <img className="card-logo" src={cardLogo} alt="card-logo" />
      </div>
      <div className="card-info">
        <p className="card-numbers">{formattedCardNumber ? formattedCardNumber : "0000 0000 0000 0000"}</p>
        <div className="card-name">
          <p>
            {holderName === ""
              ? "JANE APPLESEED"
              : holderName.toLocaleUpperCase()}
          </p>
          <p>
            {expDate.MM === "" || expDate.MM === 0 ? "00" : expDate.MM}/
            {expDate.YY === "" || expDate.YY === 0 ? "00" : expDate.YY}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardFront;
