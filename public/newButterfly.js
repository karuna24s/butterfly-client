import socketIOClient from "socket.io-client";
const url = "https://butterfly-server-api.herokuapp.com/";
const socket = socketIOClient(url);

export function createBlueButterflies() {
  const emittedObject = {};
  socket.emit("butterfly", {
    pathName: emittedObject,
  });
  const BlueButton = document.getElementById("Blue");
  const newImg = document.createElement("img");
  newImg.setAttribute("src", "static/BlueButterfly.png");
  newImg.setAttribute("id", "BlueButterflies");
  BlueButton.appendChild(newImg);
  console.log("Blue: ", newImg);
}

export function createPinkButterflies() {
  const emittedObject = {};
  socket.emit("butterfly", {
    pathName: emittedObject,
  });
  const PinkButton = document.getElementById("Pink");
  const newImg = document.createElement("img");
  newImg.setAttribute("src", "static/PinkButterfly.png");
  newImg.setAttribute("id", "PinkButterflies");
  PinkButton.appendChild(newImg);
  console.log("Pink: ", newImg);
}

export function createOrangeButterflies() {
  const emittedObject = {};
  socket.emit("butterfly", {
    pathName: emittedObject,
  });
  const OrangeButton = document.getElementById("Orange");
  const newImg = document.createElement("img");
  newImg.setAttribute("src", "static/OrangeButterfly.png");
  newImg.setAttribute("id", "OrangeButterflies");
  OrangeButton.appendChild(newImg);
  console.log("Orange: ", newImg);
}

export function createPurpleButterflies() {
  const emittedObject = {};
  socket.emit("butterfly", {
    pathName: emittedObject,
  });
  const PurpleButton = document.getElementById("Purple");
  const newImg = document.createElement("img");
  newImg.setAttribute("src", "static/PurpleButterfly.png");
  newImg.setAttribute("id", "PurpleButterflies");
  PurpleButton.appendChild(newImg);
  console.log("Purple: ", newImg);
}

export function createYellowButterflies() {
  const emittedObject = {};
  socket.emit("butterfly", {
    pathName: emittedObject,
  });
  const YellowButton = document.getElementById("Yellow");
  const newImg = document.createElement("img");
  newImg.setAttribute("src", "static/YellowButterfly.png");
  newImg.setAttribute("id", "YellowButterflies");
  YellowButton.appendChild(newImg);
  console.log("Yellow: ", newImg);
}
