import React from "react";
import Header from "./components/Header/Header.component.js";
import ButterflyField from "./components/ButterflyField/ButterflyField.component";
import Form from "./components/Form/Form.component";

import handwashing from "./feature_butterflies/handwashing.svg";

const App = () => {

  return (
    <div style={{ textAlign: "center" }}>
      <Header handwashing={handwashing} />
      <ButterflyField />
      <Form />
    </div>
  );
};

export default App;
