import React, { useContext } from "react";
import { CardContext } from "../../store/CardContext";

function Input({ id, label, placeholder, type, ...rest }) {
  const { error } = useContext(CardContext);

  const filteredField = error.filter((item) => item.fieldId === id);
  return (
    <div className="input-group">
      <label htmlFor={id} className="input-label">
        {label.toLocaleUpperCase()}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`input ${
          filteredField.map((item) => item.hasError)[0] ? "error-input" : ""
        }`}
        {...rest}
      />
      {filteredField.map((item, index) =>
        item.hasError ? (
          <p key={index} className="error-msg">
            {item.message}
          </p>
        ) : (
          ""
        )
      )}
    </div>
  );
}

export default Input;
