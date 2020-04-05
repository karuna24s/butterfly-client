function createPinkButterflies() {
  const PinkButton = document.getElementById("Pink");
  const newImg = document.createElement("img");
  newImg.setAttribute("src", "static/PinkButterfly.png");
  newImg.setAttribute("id", "Pink");
  PinkButton.appendChild(newImg);
}
