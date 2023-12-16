import { createContext, useState } from "react";

export const CardContext = createContext({
  cardNumber: "",
  holderName: "",
  expDate: {
    MM: "",
    YY: "",
  },
  cvc: "",
  error: {
    error: false,
    errorField: "",
    errorMsg: "",
  },
  success: false,
  setCardNumber: () => {},
  setHolderName: () => {},
  setExpDate: () => {},
  setExpDate: () => {},
  setCvc: () => {},
  setError: () => {},
  setSuccess: () => {},
});

export default function CardContextProvider({ children }) {
  const [cardNumber, setCardNumber] = useState("");
  const [holderName, setHolderName] = useState("");
  const [expDate, setExpDate] = useState({
    MM: "",
    YY: "",
  });
  const [cvc, setCvc] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const contextValue = {
    cardNumber,
    holderName,
    expDate,
    cvc,
    error,
    success,
    setCardNumber,
    setHolderName,
    setExpDate,
    setCvc,
    setError,
    setSuccess,
  };

  return (
    <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>
  );
}
