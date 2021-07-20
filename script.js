var cssCode = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("random-gradient-btn");
var backBtn = document.getElementById("go-back");
var backgroundsHistory = [];

function update() {
  if (backgroundsHistory.length > 1) {
    document.getElementById("go-back").style.visibility = "visible";
  } else {
    document.getElementById("go-back").style.visibility = "hidden";
  }
}

function addToHistory(color1, color2, color3) {
  var item = [color1, color2, color3];
  backgroundsHistory.push(item);
  update();
}

function goBack() {
  backgroundsHistory.pop();
  var arrayLength = backgroundsHistory.length;

  var lastItem = backgroundsHistory[arrayLength - 1];

  body.style.background = `linear-gradient(to right, #${lastItem[0]}, #${lastItem[1]}, #${lastItem[2]})`;
  cssCode.textContent = body.style.background + ";";

  color1.value = "#" + lastItem[0];
  color2.value = "#" + lastItem[1];
  color3.value = "#" + lastItem[2];

  update();
}

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value}, ${color3.value})`;
  cssCode.textContent = body.style.background + ";";
  update();
}

function genRandomColor() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);

  while (randomColor.length < 6) {
    randomColor += "0";
  }

  return randomColor;
}

function randomGradient() {
  var randomColor1 = genRandomColor();
  var randomColor2 = genRandomColor();
  var randomColor3 = genRandomColor();

  body.style.background = `linear-gradient(to right, #${randomColor1}, #${randomColor2}, #${randomColor3})`;
  cssCode.textContent = body.style.background + ";";
  addToHistory(randomColor1, randomColor2, randomColor3);

  update();

  color1.value = `#${randomColor1}`;
  color2.value = `#${randomColor2}`;
  color3.value = `#${randomColor3}`;
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

color3.addEventListener("input", setGradient);

randomBtn.addEventListener("click", randomGradient);

backBtn.addEventListener("click", goBack);
