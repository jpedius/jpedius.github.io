"use strict";

export class MyHTML {

  button(element, css=null, text="", click=null) {

    let item = document.createElement("button");
    if (css !== null) { item.classList.add(...css); }

    item.innerHTML = text;
    item.addEventListener("click", click);

    element.appendChild(item);

    return item;
  }

  checkbox(element, css=null, check=false) {

    let item = document.createElement("input");
    if (css !== null) { item.classList.add(...css); }

    item.type = "checkbox";
    item.autocomplete = "off";
    item.autocorrect = "off";
    item.autocapitalize = "off";
    if (check === true) { item.checked = "checked"; }

    element.appendChild(item);

    return item;
  }

  div(element, css=null, text="") {

    let item = document.createElement("div");
    if (css !== null) { item.classList.add(...css); }

    item.innerHTML = text;

    element.appendChild(item);

    return item;
  }

  hidden(element) {

    let item = document.createElement("input");

    item.type = "hidden";

    element.appendChild(item);

    return item;
  }

  hr(element, css=null) {

    let item = document.createElement("hr");
    if (css !== null) { item.classList.add(...css); }

    element.appendChild(item);

    return item;
  }

  img(element, css=null, width=100, height=100, src=null) {

    let item = document.createElement("img");
    if (css !== null) { item.classList.add(...css); }

    item.width = width;
    item.height = height;
    item.src = src;

    element.appendChild(item);

    return item;
  }

  input(element, css=null, size=4, readonly=false) {

    let item = document.createElement("input");
    if (css !== null) { item.classList.add(...css); }

    item.type = "text";
    item.autocomplete = "off";
    item.autocorrect = "off";
    item.autocapitalize = "off";
    item.size = size;
    if (readonly === true) { item.readOnly = "readonly"; }

    element.appendChild(item);

    return item;
  }

  number(element, css=null, text="") {

    let item = document.createElement("span");
    if (css !== null) { item.classList.add(...css); }

    item.innerHTML = text;

    element.appendChild(item);

    return item;
  }

  options(element, choose, keys) {

    let len = element.children.length;
    for (let i=0; i<len; i++) {
      element.remove(0);
    }

    for (let i=0; i<choose.length; i++) {
      const option = document.createElement("option");
      if (keys == true) {
        option.textContent = choose[i].name;
        option.value = choose[i].key;
      }
      else {
        option.textContent = choose[i].group;
        option.value = choose[i].group;
      }
      element.appendChild(option);
    }

      return element;
  }

  select(element, css=null, change=null) {

    let item = document.createElement("select");
    if (css !== null) { item.classList.add(...css); }

    item.innerHTML = "";
    item.addEventListener("change", change);

    element.appendChild(item);

    return item;
  }

  span(element, css=null, text="", style=null) {

    let item = document.createElement("span");
    if (css !== null) { item.classList.add(...css); }

    item.innerHTML = text;
    if (style !== null) {
      for (let i=0; i<style.length; i++) {
        item.style.setProperty(style[i][0], style[i][1]);
      }
    }

    element.appendChild(item);

    return item;
  }
}
