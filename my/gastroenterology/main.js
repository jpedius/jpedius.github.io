"use strict";

import { fn_speak } from "../assets/module/speak.js";
import { fn_application, Style } from "../assets/module/application.js";
import { Entry } from "../assets/module/element.js";
import { fn_gastroenterology } from "../assets/module/gastroenterology.js";

function fn_paragraphs(entry, element, all) {

	for (let each of all) {
		let div = entry.div(element, ["myDiv"]);
		if (Array.isArray(each)) {
			fn_paragraphs(entry, div, each);
		} else {
			entry.button(div, ["myButton"], "Play", (event) => {
				fn_speak(each);
			});
			entry.span(div, ["mySpan"], each);
		}
	}
}

function fn_main(element, style) {

	let entry = new Entry();

	let gastroenterology = fn_gastroenterology();

	let main = document.createElement("main");
	element.appendChild(main);

	style.add(`.myDiv {
		font: 20px --main-font, sans-serif;
	    padding: 5px 5px 5px 60px;
	}`);
	style.add(`.mySpan {
		font: 20px --main-font, sans-serif;
	    padding: 5px;
	}`);
	style.add(`.myButton {
		font: 20px --main-font, sans-serif;
		margin: 0px 10px 0px 0px;
	    padding: 5px;
	}`);
 
	fn_paragraphs(entry, main, gastroenterology);
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
fn_app("Gastroenterology");
