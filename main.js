"use strict";

function fn_header_style() {

	let style = document.createElement("style");

	style.innerHTML = `
		.myHeader {
			font: 3em "Fira Sans", sans-serif;
		    padding: 5px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	`;

	document.head.appendChild(style);
}

function fn_header_html(element, title) {

	let header = document.createElement("header");
	element.appendChild(header);

	let div = document.createElement("div");
	div.classList.add("myHeader")
	div.innerHTML = title;
	header.appendChild(div);

	let hr = document.createElement("hr");
	header.appendChild(hr);
}

function fn_main_style() {

	let style = document.createElement("style");

	style.innerHTML = `
		.myParagraph {
			font: 1.8em "Fira Sans", sans-serif;
		    padding: 5px;
		}
	`;

	document.head.appendChild(style);
}

function fn_main_html(element) {

	let main = document.createElement("main");
	element.appendChild(main);

	let names = [
		{name: "Exercises", href: "my/exercises"},
		{name: "Gastroenterology", href: "my/gastroenterology"},
	];

	for (let i of names) {

		let div = document.createElement("div");
		main.appendChild(div);

		let p = document.createElement("p");
		p.classList.add("myParagraph");
		div.appendChild(p);

		let a = document.createElement("a");
		a.innerHTML = i.name;
		a.href = i.href;
		p.appendChild(a);
	}
}

function fn_app(title) {

	document.title = title;

	let element = document.getElementById("main");

	fn_header_style();
	fn_header_html(element, title);

	fn_main_style();
	fn_main_html(element);
}
fn_app("jpedius.github.io");
