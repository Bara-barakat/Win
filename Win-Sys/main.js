document.onclick = hideMenu;
document.oncontextmenu = rightClick;

function hideMenu() {
  document.getElementById("contextMenu").style.display = "none";
}

function rightClick(e) {
  e.preventDefault();

  if (document.getElementById("contextMenu").style.display == "block")
    hideMenu();
  else {
    let menu = document.getElementById("contextMenu");

    menu.style.display = "block";
    menu.style.left = e.pageX + "px";
    menu.style.top = e.pageY + "px";
  }
}

function next() {
  document.body.style.backgroundImage = "url('Shapes.png')";
}

function ref() {
  window.location.reload();
}

let serElements = document.getElementsByClassName("ser");

function showSer() {
  for (let i = 0; i < serElements.length; i++) {
    serElements[i].style.display = "block";
  }
}

let calc = document.getElementsByClassName("calc");

function showCalc() {
  for (let i = 0; i < calc.length; i++) {
    calc[i].style.display = "block";
  }
}

const display = document.getElementById("display");

function append(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
    setTimeout(function () {
      clearDisplay();
    }, 2000);
  }
}

const se = document.querySelector(".sett");

function sett() {
  se.style.display = "block";
}

const img1 = document.querySelector(".imgs1");
const img2 = document.querySelector(".imgs2");
const body = document.body;

img1.addEventListener("mouseover", () => {
  body.style.backgroundImage = "url('./1342199.png')";
});

img1.addEventListener("mouseout", () => {
  body.style.backgroundImage = "";
});

img2.addEventListener("mouseover", () => {
  body.style.backgroundImage = "url('./Shapes.png')";
});

img2.addEventListener("mouseout", () => {
  body.style.backgroundImage = "";
});





const awi = document.getElementsByClassName("awi");

function aw() {
  for (let i = 0; i < awi.length; i++) {
    awi[i].style.display = "block";
  }
}