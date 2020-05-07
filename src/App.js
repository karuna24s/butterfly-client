import React, { useState } from "react";
import Header from "./components/Header/Header.component.js";
import "./App.css";
//import ButterflyField from "./components/ButterflyField/ButterflyField.component";
import Form from "./components/Form/Form.component";
import socketIOClient from "socket.io-client";

//import { imageData } from "./data/imageData";
import handwashing from "./feature_butterflies/handwashing.svg";
const url = "http://localhost:4001";
//const url = "https://butterfly-server-api.herokuapp.com/"

const App = () => {
  const [pathName, setPathName] = useState("");

  const socket = socketIOClient(url);
  socket.on("butterfly", (data) => {
    //data given to us from the server from the server
    console.log("Client Listening For Server: ", data);
    setPathName(data.pathName);
  });

  return (
    <div className="App">
      <Header handwashing={handwashing} />
      <footer>
        <Form butterflyAnimation={pathName} />
      </footer>
    </div>
  );
};

export default App;
