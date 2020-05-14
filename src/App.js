import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header.component.js";
import ButterflyField from "./components/ButterflyField/ButterflyField.component";
import Form from "./components/Form/Form.component";
import Footer from './components/Footer/Footer.component';
import InfoModal from './components/Modal/Modal.component';

import handwashing from "./feature_butterflies/handwashing.svg";

const App = () => {

  const [isModalOpen, setModalState] = useState([true]);

  const toggleModal = () => {
    setModalState(!isModalOpen)
  }

  return (
    <div style={{ textAlign: "center" }}>

      {isModalOpen ? <InfoModal toggleModal={toggleModal}/> : ""}

      <Header handwashing={handwashing} />
      <ButterflyField />
      <Form />
      <Footer toggleModal={toggleModal} isModalOpen={isModalOpen} />
    </div>
  );
};

export default App;
