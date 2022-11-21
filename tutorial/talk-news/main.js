'use strict';

let previousOrNext = 0;
let howMany = [
  "Hello",
  "World",
];
//howMany = shuffle(howMany);

const qq = document.querySelector(".text-b");

const inputTxt = document.querySelector(".txt");
inputTxt.value = (howMany.length === 0) ? "" : howMany[previousOrNext];

function setText() {
  return inputTxt.value = howMany[previousOrNext];
}

function play() {
  speak(howMany[previousOrNext]);
  inputTxt.blur();
}

function show() {

  howMany = qq.value.match( /[^\.!\?]+[\.!\?]+/g );
  howMany = howMany.map(x => x.trim());
  previousOrNext = 0;
  inputTxt.value = howMany[previousOrNext];
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
