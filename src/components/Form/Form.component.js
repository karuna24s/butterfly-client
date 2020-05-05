import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import { Row, Col } from "reactstrap";
import styles from "./Form.module.css";

import { supportTexts } from "../../data/supportTexts";
import { imageData } from "../../data/imageData";
const url = "http://localhost:4001";
//const url = "https://butterfly-server-api.herokuapp.com";
const socket = socketIOClient(url);

const handleSubmit = (pathName) => (event) => {
  event.preventDefault();

  const emitObj = {
    pathName: pathName,
  };
  //On click, emit data to server
  socket.emit("butterfly", emitObj);
};

const Form = ({ butterflyAnimation }) => {
  useEffect(() => {
    if (butterflyAnimation) {
      console.log("Butterfly Animation: ", butterflyAnimation);
      const butterflyButton = document.getElementById(`${butterflyAnimation}`);
      //console.log("Clicked butterfly: ", butterflyButton);
      const newImg = document.createElement("img");
      newImg.setAttribute("src", imageData[`${butterflyAnimation}`]);
      newImg.setAttribute("id", butterflyAnimation);
      //console.log("New Image: ", newImg);
      butterflyButton.appendChild(newImg);
    }
  });
  return (
    <Row className={styles.buttonsRow}>
      {supportTexts.map((text) => (
        <Col id={text.pathName} className={styles.padding}>
          <div key={text.id}>
            <img
              src={text.img}
              alt={text.pathName}
              onClick={handleSubmit(text.pathName)}
            />
          </div>
          <p>{text.msg}</p>
        </Col>
      ))}
    </Row>
  );
};

export default Form;
