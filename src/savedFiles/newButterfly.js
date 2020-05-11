var socket = io("https://butterfly-server-api.herokuapp.com");

var funcObj = {
  Purple: createPurpleButterflies,
  Blue: createBlueButterflies,
  Orange: createOrangeButterflies,
  Yellow: createYellowButterflies,
  Pink: createPinkButterflies,
};

function clickEmit(callback) {
  socket.emit("butterfly", callback);
}

socket.on("butterfly", function (data) {
  //console.log("Clients: ", funcObj[data])
  var callback = funcObj[data];
  callback();
});

function fiveSecondRule(parentNode, childNode) {
  setTimeout(function () {
    parentNode.removeChild(childNode);
  }, 5000);
}

function createBlueButterflies() {
  const BlueButton = document.getElementById("Blue");
  const newImg = document.createElement("img");
  newImg.setAttribute("src", "static/BlueButterfly.png");
  newImg.setAttribute("id", "BlueButterflies");
  BlueButton.appendChild(newImg);

  fiveSecondRule(BlueButton, newImg);
}
function createYellowButterflies() {
  const YellowButton = document.getElementById("Yellow");
  const newImg = document.createElement("img");
  newImg.setAttribute("src", "static/YellowButterfly.png");
  newImg.setAttribute("id", "YellowButterflies");
  YellowButton.appendChild(newImg);

  fiveSecondRule(YellowButton, newImg);
}
function createOrangeButterflies() {
  const OrangeButton = document.getElementById("Orange");
  const newImg = document.createElement("img");
  newImg.setAttribute("src", "static/OrangeButterfly.png");
  newImg.setAttribute("id", "OrangeButterflies");
  OrangeButton.appendChild(newImg);

  fiveSecondRule(OrangeButton, newImg);
}
function createPinkButterflies() {
  const PinkButton = document.getElementById("Pink");
  const newImg = document.createElement("img");
  newImg.setAttribute("src", "static/PinkButterfly.png");
  newImg.setAttribute("id", "PinkButterflies");
  PinkButton.appendChild(newImg);

  fiveSecondRule(PinkButton, newImg);
}
function createPurpleButterflies() {
  const PurpleButton = document.getElementById("Purple");
  const newImg = document.createElement("img");
  newImg.setAttribute("src", "static/PurpleButterfly.png");
  newImg.setAttribute("id", "PurpleButterflies");
  PurpleButton.appendChild(newImg);

  fiveSecondRule(PurpleButton, newImg);
}
