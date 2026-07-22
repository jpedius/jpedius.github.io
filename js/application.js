"use strict";

import { MyStyle } from "./style.js";
import { MyHTML } from "./html.js";
import { MySpeak } from "./speak.js";

export class MyApplication {

  constructor(title) {

    this.myTitle = title;

    this.myStyle = new MyStyle();
    this.myStyle.add(`:root {
      --main-font: "Fira Sans";
    }`);

    this.myHTML = new MyHTML();

    this.mySpeak = new MySpeak();
  }

  title() {

    document.title = this.myTitle;
  }

  header(style) {

    let body = document.getElementById("body");

    let header = document.createElement("header");
    body.appendChild(header);

    let div = document.createElement("div");
    div.classList.add(style);
    div.innerHTML = this.myTitle;
    header.appendChild(div);

    let hr = document.createElement("hr");
    header.appendChild(hr);

    this.myStyle.add(`.` + style + ` {
      align-items: center;
      display: flex;
      font: 52px --main-font, sans-serif;
      justify-content: center;
      padding: 5px;
    }`);

    return body;
  }

  request(url) {

    fetch(new Request(url))
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error, status = ${response.status}`);
        }
        return response.text();
      })
      .then((data) => {
        this.entry(data);
      })
      .catch((error) => {
        console.error(`Error: ${error.message}`);
      });
  }

  entry(data) {}
}
