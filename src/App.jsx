import React, { useContext } from "react";
import GradientImg from "./components/GradientImg";
import CreditCards from "./components/CreditCards";
import { CardContext } from "./store/CardContext";
import Success from "./components/Success";
import Form from "./components/Form"

function App() {
  const { success } = useContext(CardContext);
  return (
    <section className="container">
      <GradientImg />
      <CreditCards />
      {success ? <Success /> : <Form />}
    </section>
  );
}

export default App;
