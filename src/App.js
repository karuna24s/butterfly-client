import React, { useState } from "react";
import Header from "./components/Header/Header.component.js";
import ButterflyField from "./components/ButterflyField/ButterflyField.component";
import Form from "./components/Form/Form.component";
import socketIOClient from "socket.io-client";

import handwashing from "./feature_butterflies/handwashing.svg";

const App = () => {
  const [pathName, setPathName] = useState("");

  const socket = socketIOClient("https://butterfly-server-api.herokuapp.com/");
  socket.on("butterfly", (data) => {
    //data given to us from the server from the server
    console.log("Client Listening For Server: ", data);
    setPathName(data.pathName);
  });

  return (
    <div style={{ textAlign: "center" }}>
      <Header handwashing={handwashing} />
      <ButterflyField pathName={pathName} />
      <Form />
    </div>
  );
};

export default App;
