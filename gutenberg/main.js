"use strict";

import { MyApplication } from "../js/application.js";

class MyGutenbergBooks {

  constructor() {

    this.myGutenbergBooks = [{
      "name": "Alice’s Adventures in Wonderland",
      "key": "/gutenberg/text/alices-adventures-in-wonderland.txt",
    }, {
      "name": "Through the Looking-Glass",
      "key": "/gutenberg/text/through-the-looking-glass.txt",
    }, {
      "name": "Peter Pan",
      "key": "/gutenberg/text/peter-pan.txt",
    }];

    this.myWords = [];
    this.myNumber = 0;

    this.myOldAndNew = null;
  }

  books() { return this.myGutenbergBooks; }

  key(index) { return this.myGutenbergBooks[index].key; }

  words(data) {

    this.myWords = [];
    this.myNumber = 0;

    let array = [];
    let previous = 0;
    data.split("\n").forEach((element) => {
      let item = element.split(" ").filter((x) => x != "");
      if (item.length !== 0 || previous !== 0) {
        array.push(item);
      }
      previous = item.length;
    });

    let words = [];
    let column = 0;
    let line = 0;
    let re = /[.,:;!?”)]$/;

    for (let i=0; i<array.length; i++) {
      if (array[i].length !== 0) {
        for (let j=0; j<array[i].length; j++) {
          words.push({
            "word": array[i][j],
            "column": column,
            "line": line,
          });
          if (array[i][j].match(re)) {
            this.myWords.push(words);
            words = [];
          }
          if (array[i].length === column + 1) {
            column = 0;
            line += 1;
          }
          else {
            column += 1;
          }
        }
      }
      else {
        if (words.length !== 0) {
          this.myWords.push(words);
          words = [];
        }
        column = 0;
        line += 1;
      }
    }

    return array;
  }

  initial() {

    let n = this.myWords[this.myNumber];

    return [this.myNumber, n];
  }

  previous() {

    let o = this.myWords[this.myNumber];

    if (this.myNumber <= 0) {
      this.myNumber = this.myWords.length;
    }
    this.myNumber -= 1;

    let n = this.myWords[this.myNumber];

    return [this.myNumber, o, n];
  }

  play() {

    let words = this.myWords[this.myNumber];

    return words.map(({ "word": word }) => word ).join(" ");
  }

  next() {

    let o = this.myWords[this.myNumber];

    if (this.myNumber >= this.myWords.length - 1) {
      this.myNumber = -1;
    }
    this.myNumber += 1;

    let n = this.myWords[this.myNumber];

    return [this.myNumber, o, n];
  }

  total() { return this.myWords.length; }

  goto(value) {

    let o = this.myWords[this.myNumber];

    this.myNumber = Number(value) - 1;

    let n = this.myWords[this.myNumber];

    return [this.myNumber, o, n];
  }
}

class MyMain extends MyApplication {

  constructor(title) {
    super(title);

    this.myBooks = new MyGutenbergBooks();
    this.myObject = {};
  }

  main() {

    this.title();
    let body = this.header("myHeader");
    let main = document.createElement("main");
    body.appendChild(main);

    let div = this.myHTML.div(main, ["myDiv"]);

    this.myObject.select = this.myHTML.select(div, ["myDiv"], (event) => {
      let url = this.myBooks.key(this.myObject.select.selectedIndex);
      this.request(url);
    });
    this.myHTML.options(this.myObject.select, this.myBooks.books(), true);

    div = this.myHTML.div(main, ["myDiv"]);

    this.myHTML.button(div, ["myDiv", "myButton"], "Previous", (event) => {
      let [num, o, n] = this.myBooks.previous();
      this.oldAndNew(num, o, n);
    });

    this.myHTML.button(div, ["myDiv", "myButton"], "Play", (event) => {
      this.mySpeak.talk(this.myBooks.play());
    });

    this.myHTML.button(div, ["myDiv", "myButton"], "Next", (event) => {
      let [num, o, n] = this.myBooks.next();
      this.oldAndNew(num, o, n);
    });

    this.myObject.number = this.myHTML.number(div, ["myDiv"], 1);

    this.myHTML.number(div, ["myDiv"], "/");

    this.myObject.total = this.myHTML.number(div, ["myDiv", "myButton"], "");

    this.myHTML.button(div, ["myDiv", "myButton"], "Go To", (event) => {

      if (Number(this.myObject.goto.value) === NaN) { return }
      if (Number(this.myObject.goto.value) <= 0) { return }
      if (Number(this.myObject.goto.value) > Number(this.myObject.total.innerHTML)) { return }

      let [num, o, n] = this.myBooks.goto(this.myObject.goto.value);
      this.oldAndNew(num, o, n);
      this.myObject.goto.value = "";
    });

    this.myObject.goto = this.myHTML.input(div, ["myDiv", "myButton"], 4);

    div = this.myHTML.div(main, ["myDiv"]);

    this.myObject.text = this.myHTML.div(div, ["myArea"]);

    this.style();

    let url = this.myBooks.key(this.myObject.select.selectedIndex);
    this.request(url);
  }

  oldAndNew(num, o, n) {

    for (let i=0; i<o.length; i++) {
      let span = this.myObject.text.childNodes[o[i].line].childNodes[o[i].column];
      span.classList.add("myDisabled");
    }

    for (let i=0; i<n.length; i++) {
      let span = this.myObject.text.childNodes[n[i].line].childNodes[n[i].column];
      span.classList.remove("myDisabled");
    }

    this.myObject.number.innerHTML = num + 1;
  }

  entry(data) {

    while (this.myObject.text.firstChild) {
      this.myObject.text.removeChild(this.myObject.text.firstChild);
    }

    let words = this.myBooks.words(data);
    for (let i=0; i<words.length; i++) {
      let div = this.myHTML.div(this.myObject.text, ["myText"]);
      for (let j=0; j<words[i].length; j++) {
        this.myHTML.span(div, ["myDisabled", "mySpan"], words[i][j]);
      }
    }

    let [num, n] = this.myBooks.initial();
    for (let i=0; i<n.length; i++) {
      let span = this.myObject.text.childNodes[n[i].line].childNodes[n[i].column];
      span.classList.remove("myDisabled");
    }

    this.myObject.number.innerHTML = num + 1;
    this.myObject.total.innerHTML = this.myBooks.total();
  }

  style() {

    let style = this.myStyle.add(`.myDiv {
      font: 20px --main-font, sans-serif;
      padding: 5px;
    }`).add(`.myButton {
      margin: 0px 10px 0px 0px;
    }`).add(`.myArea {
      height: 800px;
      overflow: auto;
      width: 1200px;
    }`).add(`.myText {
      font: 30px --main-font, sans-serif;
      padding: 5px;
    }`).add(`.mySpan {
      margin: 0px 10px 0px 0px;
    }`).add(`.myDisabled {
      color: #ccc;
    }`).set();

    return style
  }
}
new MyMain("Gutenberg Books").main();
