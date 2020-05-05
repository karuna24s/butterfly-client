import React, { useState, useEffect } from "react";
//import Form from "../Form/Form.component";
import socketIOClient from "socket.io-client";
import styles from "./ButterflyField.module.css";
// import BlueButterfly from "../../feature_butterflies/BlueButterfly.png";
// import OrangeButterfly from "../../feature_butterflies/OrangeButterfly.png";
// import PinkButterfly from "../../feature_butterflies/PinkButterfly.png";
// import PurpleButterfly from "../../feature_butterflies/PurpleButterfly.png";
// import YellowButterfly from "../../feature_butterflies/YellowButterfly.png";

// const imgObj = {
//   BlueButterfly,
//   OrangeButterfly,
//   PinkButterfly,
//   PurpleButterfly,
//   YellowButterfly,
// };


// import { imageData } from "../../data/imageData";

// const url = "https://butterfly-server-api.herokuapp.com";
// const socket = socketIOClient(url);

const ButterflyField = () => {
  //const [pathname, setPathName] = useState("BlueButterfly");
  const [butterflies, setButterflies] = useState([]);

  //const [visible, setVisible] = useState(false);

  // function hideMe() {
  //   setVisible(true);
  // }

  useEffect(() => {
    const socket = socketIOClient("https://butterfly-server-api.herokuapp.com/");
    socket.on("butterfly", (data) => {
      //data given to us from the server from the server
      console.log("Client Listening For Server: ", data);
      setButterflies(butterflies => [...butterflies, data.pathName])
    });
  }, []);

  // socket.on("butterfly", (data) => {
  //   //data given to us from the server from the server
  //   //console.log("Client Listening For Server: ", data);
  //
  //   //setPathName(data.pathName);
  //   setButterflies([...butterflies, data.pathName]);
  //   //hideMe();
  // });
  // let style = {};
  // if (!visible) style.display = "none";
  //butterflies[butterflies.length - 1] i.e. BlueButterfly
  // useEffect(() => {
  //   console.log("Pathname: ", pathname);
  //   console.log("Butterfly: ", imageData[pathname]);
  //   const imgArray = imageData[pathname];

  //   const [img, className] = imgArray;
  //   const newButterfly = document.getElementById(`#${pathname}`);
  //   console.log("Clicked butterfly: ", newButterfly);
  //   const newImg = document.createElement("img");
  //   newImg.setAttribute("src", img);
  //   //newImg.setAttribute("className", className);
  //   console.log("New Image: ", newImg);
  //   newButterfly.appendChild(newImg);
  // });

  return (
    <div className={styles.sky}>


      {(butterflies.length > 0)
        ?
        butterflies.map((butterfly, idx) => (
          <div key={idx}>{butterfly}</div>
        ))
         :
         ""
       }


    </div>
  );
};

export default ButterflyField;
