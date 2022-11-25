'use strict';

let previousOrNext = 0;
let howMany = allPlots;

const inputTxt = document.querySelector(".txt");
inputTxt.value = howMany[previousOrNext];

function setText() {
  return inputTxt.value = howMany[previousOrNext];
}

function play() {
  speak(howMany[previousOrNext]);
  inputTxt.blur();
}

function previous() {
  if (previousOrNext <= 0) {
    previousOrNext = howMany.length;
  }
  previousOrNext--;
  return setText();
}

function next() {
  if (previousOrNext >= howMany.length - 1) {
    previousOrNext = -1;
  }
  previousOrNext++;
  return setText();
}
