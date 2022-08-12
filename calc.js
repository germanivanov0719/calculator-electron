const audio = new Audio("src/TapSound.wav");

let first = undefined;
let second = undefined;
let preserve = true; // TODO: preserve the operation value
let operation = undefined;
const display = document.getElementById("content");
display.focus();

function sign_click() {
  display.textContent = -display.textContent;
  audio.play();
  display.focus();
}

function percent_click() {
  display.textContent = display.textContent / 100;
  audio.play();
  display.focus();
}

function clear_click() {
  if (display.textContent) {
    display.textContent = "";
  } else {
    first = undefined;
    second = undefined;
    operation = undefined;
    third = undefined;
  }
  audio.play();
  display.focus();
}

function plus_click() {
  first = display.textContent;
  operation = "plus";
  display.textContent = "";
  audio.play();
  display.focus();
}

function minus_click() {
  first = display.textContent;
  operation = "minus";
  display.textContent = "";
  audio.play();
  display.focus();
}

function multiply_click() {
  first = display.textContent;
  operation = "multiply";
  display.textContent = "";
  audio.play();
  display.focus();
}

function divide_click() {
  first = display.textContent;
  operation = "divide";
  display.textContent = "";
  audio.play();
  display.focus();
}

function equal_click() {
  second = parseFloat(display.textContent);
  first = parseFloat(first);
  switch (operation) {
    case "plus":
      display.textContent = first + second;
      break;
    case "minus":
      display.textContent = first - second;
      break;
    case "multiply":
      display.textContent = first * second;
      break;
    case "divide":
      display.textContent = first / second;
      break;
  }
  audio.play();
  display.focus();
  first = display.textContent;
  second = undefined;
}

function numpad_press(number) {
  display.textContent += number;
  audio.play();
  display.focus();
}
