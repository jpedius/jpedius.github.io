"use strict";

export class MyStyle {

  constructor() {

    this.myStyle = [];
  }

  add(element) {

    this.myStyle.push(element);

    return this;
  }

  set() {

    let element = document.createElement("style");

    let style = "";
    this.myStyle.forEach((event) => {
      style += event + "\n";
    });

    element.innerHTML = style;
    document.head.appendChild(element);

    return style;
  }
}
