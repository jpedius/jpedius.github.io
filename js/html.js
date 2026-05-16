"use strict";

export class MyHTML {

}

export class MyEntry {

	constructor(title) { this.myTitle = title; }

	title() { document.title = this.myTitle; }

	header(css) {

		let body = document.getElementById("body");

		let header = document.createElement("header");
		body.appendChild(header);

		let div = document.createElement("div");
		div.classList.add(...css);
		div.innerHTML = this.myTitle;
		header.appendChild(div);

		let hr = document.createElement("hr");
		header.appendChild(hr);

		return body;
	}
}
