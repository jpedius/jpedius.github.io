"use strict";

import { MyApplication } from "../js/application.js";

class MyMain extends MyApplication {

  constructor(title) {
    super(title);

    this.myObject = null;
  }   

  main() {

    this.title();
    let body = this.header("myHeader");
    let main = document.createElement("main");
    body.appendChild(main);

    this.style();
  }

  style() {

    let style = this.myStyle.add(`.myDiv {
      font: 20px --main-font, sans-serif;
      padding: 5px;
    }`).set();

    return style;
  }
}
new MyMain("Q-Bitz").main();
