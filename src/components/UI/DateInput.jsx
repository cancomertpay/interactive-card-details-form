import React, { useContext } from "react";
import { CardContext } from "../../store/CardContext";

function DateInput({ id, placeHolder, className, ...rest }) {
  const { error } = useContext(CardContext);
  const filteredField = error.filter((item) => item.fieldId === id);
  return (
    <>
      <input
        id={id}
        type="text"
        placeholder={placeHolder}
        className={`${
          filteredField.map((item) => item.hasError)[0]
            ? "error-input"
            : ""
        } ${className ? className : ""}`}
        {...rest}
      />
      {filteredField.map((item, index) =>
        item.fieldId === "cvc" && item.hasError ? (
          <p key={index} className="error-msg">
            {item.message}
          </p>
        ) : (
          ""
        )
      )}
    </>
  );
}

export default DateInput;
