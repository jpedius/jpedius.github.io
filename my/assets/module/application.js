"use strict";

export class Style {

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

export function fn_href_names() {

	let names = [
		{ "name": "Alphabet",  "href": "alphabet" },
		{ "name": "Exercises", "href": "exercises" },
		{ "name": "Gastroenterology", "href": "gastroenterology" },
		{ "name": "GB Studio", "href": "gb-studio" },
		{ "name": "Japanese",  "href": "japanese" },
		{ "name": "Medicine",  "href": "medicine" },
		{ "name": "Plots",     "href": "plots" },
		{ "name": "Say",       "href": "say" },
		{ "name": "Sounds",    "href": "sounds" },
		{ "name": "States",    "href": "states" },
		{ "name": "Words",     "href": "words" },
	];

	return names;
}

export function fn_header(element, title, css) {

	let header = document.createElement("header");
	element.appendChild(header);

	let div = document.createElement("div");
	div.classList.add(...css);
	div.innerHTML = title;
	header.appendChild(div);

	let hr = document.createElement("hr");
	header.appendChild(hr);

	return header;
}

export function fn_application(title, css) {

	document.title = title;

	let element = document.getElementById("main");

	fn_header(element, title, css);

	return element;
}
