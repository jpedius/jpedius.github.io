'use strict';

let previousOrNext = 0;
let howMany = read_sentences(words);
howMany = shuffle(howMany);

const textWord = document.querySelector(".txt");
textWord.value = howMany[previousOrNext].word;
let inputWord = false;

const textImage = document.querySelector(".txt2");
textImage.src = 'img/blank.jpg'; //howMany[previousOrNext].image;
let inputImage = true;

const textDesc = document.querySelector(".txt3");
textDesc.value = '-----'; //howMany[previousOrNext].description;
let inputDesc = true;

function setText() {

  if (inputWord === true) {
    textWord.value = '-----';
  }
  else {
    textWord.value = howMany[previousOrNext].word;
  }

  if (inputImage === true) {
    textImage.src = "img/blank.jpg";
  }
  else {
    textImage.src = howMany[previousOrNext].image;
  }

  if (inputDesc === true) {
    textDesc.value = '-----';
  }
  else {
    textDesc.value = howMany[previousOrNext].description;
  }

  return howMany[previousOrNext];
}

function showWord() {
  if (inputWord === false) {
    textWord.value = '-----';
    inputWord = true; 
  }
  else {
    textWord.value = howMany[previousOrNext].word;
    inputWord = false;
  }
}

function showImage() {
  if (inputImage === false) {
    textImage.src = "img/blank.jpg";
    inputImage = true; 
  }
  else {
    textImage.src = howMany[previousOrNext].image;
    inputImage = false;
  }
}

function showDesc() {
  if (inputDesc === false) {
    textDesc.value = '-----';
    inputDesc = true; 
  }
  else {
    textDesc.value = howMany[previousOrNext].description;
    inputDesc = false;
  }
}

function play() {
  speak(howMany[previousOrNext].word);
  textWord.blur();
}

function read_sentences(rs) {
  let items = [];
  for (const i of rs) {
    items.push(i);
  }
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
