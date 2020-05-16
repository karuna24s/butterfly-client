import React from "react";
import Header from "./components/Header/Header.component.js";
import ButterflyField from "./components/ButterflyField/ButterflyField.component";
import Form from "./components/Form/Form.component";

import handwashing from "./feature_butterflies/handwashing.svg";
import { Container } from "reactstrap";

const App = () => {
  return (
    <Container style={{ textAlign: "center" }}>
      <Header handwashing={handwashing} />
      <ButterflyField />
      <Form />
    </Container>
  );
};

export default App;
