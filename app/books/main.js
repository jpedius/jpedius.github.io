"use strict";

import { fn_speak } from "../js/speak.js";
import { fn_application, Style } from "../js/application.js";
import { Entry } from "../js/element.js";
import { fn_books } from "../js/books.js";

let plots = {
	"array": null,
	"length": 0,
};

function fn_request(element) {

	let url = "/app/txt/books/" + element.group.value + ".txt";

	fetch(new Request(url))
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error, status = ${response.status}`);
			}
			return response.text();
		})
		.then((data) => {

			plots = { "array": [], "length": 0 }

			let array = data.split("\n");
			for (let i=0; i<array.length; i++) {
				if (array[i] !== "") {
					plots.array.push(array[i]);
				}
			}

			element.read.value = plots.array[plots.length];
			element.number.innerHTML = plots.length + 1;
			element.total.innerHTML = plots.array.length;
		})
		.catch((error) => {
			console.error(`Error: ${error.message}`);
		});
}

function fn_main(element, style) {

	let entry = new Entry();

	let main = document.createElement("main");
	element.appendChild(main);

	let div = null;

	style.add(`.myDiv {
		font: 20px --main-font, sans-serif;
	    padding: 5px;
	}`);

	div = entry.div(main, ["myDiv"]);
	style.add(`.mySelectGroups {
		font: 30px --main-font, sans-serif;
	    padding: 5px;
	}`);

	let group = entry.selectGroup(div, ["mySelectGroups"], fn_books(), 0, (event) => {
		fn_request({
			"group": group,
			"read": read,
			"number": number,
			"total": total,
		});
	});

	div = entry.div(main, ["myDiv"]);
	style.add(`.myTextarea {
		font: 40px --main-font, sans-serif;
	    padding: 5px;
	}`);

	let read = entry.textarea(div, ["myTextarea"], 14, 70, true);

	div = entry.div(main, ["myDiv"]);
	style.add(`.myButton {
		font: 20px --main-font, sans-serif;
		margin: 0px 10px 0px 0px;
	    padding: 5px;
	}`);

	entry.button(div, ["myButton"], "Previous", (event) => {

		if (plots.length <= 0) { plots.length = plots.array.length; }
		plots.length--;

		read.value = plots.array[plots.length];
		number.innerHTML = plots.length + 1;
	});

	entry.button(div, ["myButton"], "Play", (event) => {

		fn_speak(plots.array[plots.length]);
	});

	entry.button(div, ["myButton"], "Next", (event) => {

		if (plots.length >= plots.array.length - 1) { plots.length = -1; }
		plots.length++;

		read.value = plots.array[plots.length];
		number.innerHTML = plots.length + 1;
	});

	let number = entry.number(div, ["myButton"], 1);
	entry.number(div, ["myButton"], "/");
	let total = entry.number(div, ["myButton"], "");

	entry.button(div, ["myButton"], "Go To", (event) => {
		let e = Number(input.value);
		let t = Number(total.innerHTML);
		if (e !== NaN && e !== 0 && e <= t) {
			plots.length = e - 1;
			read.value = plots.array[plots.length];
			number.innerHTML = plots.length + 1;
			input.value = "";
		}
	});
	let input = entry.input(div, ["myButton"], 4);

	fn_request({
		"group": group,
		"read": read,
		"number": number,
		"total": total,
	});
}

function fn_app(title) {

	let style = new Style();

	let element = fn_application(title, ["myHeader"]);
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

	fn_main(element, style);

	style.css();
}
fn_app("Books");
