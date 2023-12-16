import React, { useContext } from "react";
import Form from "./components/Form";
import GradientImg from "./components/GradientImg";
import CreditCards from "./components/CreditCards";
import { CardContext } from "./store/CardContext";
import Success from "./components/Success";

function App() {
  const { success } = useContext(CardContext);
  return (
    <section className="container relative">
      <GradientImg mobile={true} />
      <GradientImg mobile={false} />
      <CreditCards />
      {success ? <Success /> : <Form />}
    </section>
  );
}

export default App;
