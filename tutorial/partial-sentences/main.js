'use strict';

let previousOrNext = 0;
let howMany = read_sentences(partial_sentences);
howMany = shuffle(howMany);

const inputTxt = document.querySelector(".txt");
inputTxt.value = (howMany.length === 0) ? "" : howMany[previousOrNext];

const one = document.querySelector("#one");

function setText() {
  one.value = "";
  return inputTxt.value = howMany[previousOrNext];
}

function play() {

  let a = "";
  a = howMany[previousOrNext];
  a = a + " ";
  a = a + one.value;

  speak(a);
  inputTxt.blur();
}

function read_sentences(rs) {

  let url = new URL(document.location);
  let items = [];

  const paramsString = url.search;
  const searchParams = new URLSearchParams(paramsString);

  if (searchParams.get("id")) {

    let searchId = searchParams.get("id");

    for (let i=0; i<rs.length; i++) {
      if (searchId === i.toString()) {
        items = rs[i];
      }
    }
  }

  return items;
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
