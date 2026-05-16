"use strict";

import { fn_speak } from "../js/speak.js";
import { MyStyle } from "../js/style.js";
import { MyHTML, MyEntry } from "../js/html.js";

function fn_main(body, entry, style) {

	let main = document.createElement("main");
	body.appendChild(main);
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

	fn_main(body, entry, style);

	style.css();
}
fn_app("Gutenberg Books");
