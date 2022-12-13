'use strict';

let previousOrNext = 0;
let howMany = read_sentences(words);
howMany = shuffle(howMany);

let inputBinary = false;
const inputTxt = document.querySelector(".txt");
inputTxt.value = howMany[previousOrNext];

const one = document.querySelector("#one");

console.log('words', words.length, words[0].length, words[0][0].length);

console.log('howMany', howMany.length, howMany[0]);

function setText() {
  one.value = "";
  return inputTxt.value = howMany[previousOrNext];
}

function show() {
  if (inputBinary === false) {
    inputTxt.value = '-----';
    inputBinary = true; 
  }
  else {
    inputTxt.value = howMany[previousOrNext];
    inputBinary = false;
  }
}

function play() {
  speak(howMany[previousOrNext]);
  inputTxt.blur();
}

function read_sentences(rs) {
  let items = [];
  for (const i of rs) {
    for (const j of i) {
      items.push(j.word);
    }
  }
  console.log('items', items.length);
  return items;
};

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
