const body = document.getElementsByTagName("body")[0];
const greenBtn = document.getElementById("green");
const redBtn = document.getElementById("red");
const blueBtn = document.getElementById("blue");
const randomBtn = document.getElementById("random-color");
const resetBtn = document.getElementById("reset-color");

function changeColor(color) {
  body.style.backgroundColor = color;
}

greenBtn.addEventListener("click", () => {
  changeColor("green");
});
redBtn.addEventListener("click", () => {
  changeColor("red");
});
blueBtn.addEventListener("click", () => {
  changeColor("blue");
});

function randomColor() {
  const green = Math.round(Math.random() * 2555);
  const red = Math.round(Math.random() * 2555);
  const blue = Math.round(Math.random() * 2555);

  const color = `rgb(${green}, ${red}, ${blue})`;

  body.style.backgroundColor = color;
}

randomBtn.addEventListener("click", randomColor);

resetBtn.addEventListener("click", () => {
  body.style.backgroundColor = "white";
});
