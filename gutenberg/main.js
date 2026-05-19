"use strict";

import { fn_speak } from "../js/speak.js";
import { MyStyle } from "../js/style.js";
import { MyHTML, MyEntry } from "../js/html.js";

import { fn_books, MyBook } from "./books.js";

function fn_request(object, books) {

	let url = books[object.select.selectedIndex].key;

	fetch(new Request(url))
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error, status = ${response.status}`);
			}
			return response.text();
		})
		.then((data) => {

			let html = new MyHTML();

			while (object.text.firstChild) {
				object.text.removeChild(object.text.firstChild);
			}

			object.book = new MyBook(data);

			let array = object.book.array();
			for (let i=0; i<array.length; i++) {
				let div = html.div(object.text, ["myText"]);
				for (let j=0; j<array[i].length; j++) {
					html.span(div, ["myDisabled", "mySpan"], array[i][j]);
				}
			}

			object.book.span(object.text, "myDisabled", false);

			object.number.innerHTML = 1;
			object.total.innerHTML = object.book.total();
		})
		.catch((error) => {
			console.error(`Error: ${error.message}`);
		});
}

function fn_main(body, style) {

	let html = new MyHTML();
	let object = { "book": null };
	let books = fn_books();

	let main = document.createElement("main");
	body.appendChild(main);

	style.add(`
		.myDiv {
			font: 20px --main-font, sans-serif;
		    padding: 5px;
		}
		.myButton {
			margin: 0px 10px 0px 0px;
		}
		.myArea {
			height: 800px;
			overflow: auto;
			width: 1200px;
		}
		.myText {
			font: 30px --main-font, sans-serif;
		    padding: 5px;
		}
		.mySpan {
			margin: 0px 10px 0px 0px;
		}
		.myDisabled {
			color: #ccc;
		}
	`);

	let div = html.div(main, ["myDiv"]);

	object.select = html.select(div, ["myDiv"], (event) => {
		fn_request(object, books);
	});
	html.options(object.select, books, true);

	div = html.div(main, ["myDiv"]);

	html.button(div, ["myDiv", "myButton"], "Previous", (event) => {

		object.book.span(object.text, "myDisabled", true);
		object.number.innerHTML = object.book.previous();
		object.book.span(object.text, "myDisabled", false);
	});

	html.button(div, ["myDiv", "myButton"], "Play", (event) => {
		fn_speak(object.book.play());
	});

	html.button(div, ["myDiv", "myButton"], "Next", (event) => {

		object.book.span(object.text, "myDisabled", true);
		object.number.innerHTML = object.book.next();
		object.book.span(object.text, "myDisabled", false);
	});

	object.number = html.number(div, ["myDiv"], 1);

	html.number(div, ["myDiv"], "/");

	object.total = html.number(div, ["myDiv", "myButton"], "");

	html.button(div, ["myDiv", "myButton"], "Go To", (event) => {

		if (Number(object.goto.value) === NaN) { return }
		if (Number(object.goto.value) <= 0) { return }
		if (Number(object.goto.value) > Number(object.total.innerHTML)) { return }

		object.book.span(object.text, "myDisabled", true);
		object.number.innerHTML = object.book.go_to(object.goto.value);
		object.goto.value = "";
		object.book.span(object.text, "myDisabled", false);
	});

	object.goto = html.input(div, ["myDiv", "myButton"], 4);

	div = html.div(main, ["myDiv"]);

	object.text = html.div(div, ["myArea"]);

	fn_request(object, books);
}

function fn_app(title) {

	let style = new MyStyle();
	let entry = new MyEntry(title);

	entry.title();
	let body = entry.header(["myHeader"]);

	style.add(`:root {
		--main-font: "Fira Sans";
	}`);
	style.add(`.myHeader {
		align-items: center;
		display: flex;
		font: 52px --main-font, sans-serif;
		justify-content: center;
		padding: 5px;
	}`);

	fn_main(body, style);

	style.css();
}
fn_app("Gutenberg Books");
