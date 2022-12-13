'use strict';

let previousOrNext = 0;
let howMany = read_sentences(words);
howMany = shuffle(howMany);

let inputBinary = false;
const inputTxt = document.querySelector(".txt");
inputTxt.value = howMany[previousOrNext];

const one = document.querySelector("#one");

//console.log('words', words.length, words[0].length, words[0][0].length);

//console.log('howMany', howMany.length, howMany[0]);

const counts = {};

for (const num of howMany) {
  let num2 = num.length;
  counts[num2] = counts[num2] ? counts[num2] + 1 : 1;
}

console.log('counts', counts, counts.length);
/*
for (let i=0; i<howMany.length; i++) {
  console.log('i', i);
}
*/
/*
const n = howMany; //["c80", "b9", "d700", "a8", "a543"];

let h = n.sort((a, b) => {
  if (a.length < b.length) { return -1; }
  else if (a.length > b.length) { return 1; }
  else if (a < b) { return -1; }
  else if (a > b) { return 1; }
  return 0;
});

console.log('h 02', h);
*/
//for (let i=0; i<h.length; i++) {
//  console.log("{ 'word': '" + h[i] + "' },");
//}

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
      items.push(i.word);
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
