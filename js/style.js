"use strict";

export class MyStyle {

	constructor() { this.style = []; }

	add(element) { this.style.push(element); }

	css() {

		let element = document.createElement("style");

		let style = "";
		this.style.forEach((event) => {
			style += event + "\n";
		});

		element.innerHTML = style;
		document.head.appendChild(element);

		return style;
	}
}
