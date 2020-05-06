import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import Form from "../Form/Form.component";
import Butterfly from '../Butterfly/Butterfly.component';

import styles from "./ButterflyField.module.css";

const ButterflyField = () => {
  const [butterflies, setButterflies] = useState([]);

  useEffect(() => {
    const socket = socketIOClient("https://butterfly-server-api.herokuapp.com/");
    socket.on("butterfly", (data) => {
      //data given to us from the server
      console.log("Client Listening For Server: ", data);
      const timestamp = Date.now()
      setButterflies(butterflies => [...butterflies, {id: timestamp, color: data}])
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("interval");
      setButterflies(butterflies => butterflies.filter(butterfly => Date.now() - butterfly.id < 8000))
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
    <div className={styles.sky}>

      {(butterflies.length > 0)
        ? butterflies.map((butterfly) => (
          <Butterfly key={butterfly.id} timestamp={butterfly.id} color={butterfly.color} />
        ))

         : ""
       }

    </div>

    </div>
  );
};

export default ButterflyField;
