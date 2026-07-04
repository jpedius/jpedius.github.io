"use strict";

import { fn_speak } from "../js/speak.js";
import { MyStyle } from "../js/style.js";
import { MyHTML, MyEntry } from "../js/html.js";

import { fn_tips, MyBook } from "./tips.js";

function fn_main(body, style) {

	let html = new MyHTML();
	let object = { "tips": null };
	let tips = fn_tips();

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
	`);

	let div = html.div(main, ["myDiv"]);

	html.button(div, ["myDiv", "myButton"], "🗣️", (event) => {

		const re = /^([0-9]+)\.([0-9]{2})?$/g;

		let amountParts = re.exec(object.amount.value);
		if (amountParts === null) { return }

		let amountDollars = Number(amountParts[1]);
		let amountCents = Number(amountParts[2] === undefined ? "00" : amountParts[2]);

		console.log(amountParts, amountDollars, amountCents);

		let key = tips[object.select.selectedIndex].key;
		let percentage = key.endsWith("%");

		if (key === "custom-tip") {
			object.tip.readOnly = null;
			object.tip.value = "";
			object.total.value = "";
		}
		else if (percentage === true) {
			object.tip.readOnly = "readonly";

			let tipPercent = tips[object.select.selectedIndex].key;
			let tipParts = re.exec(tipPercent);
			if (tipParts === null) { return }

			let tipDollars = Number(tipParts[1]);
			let tipCents = Number(tipParts[2] === undefined ? "00" : tipParts[2]);

			let totalDollars = totalDollars + tipDollars;

			object.tip.value = tipDollars + "." + tipCents;
		}
		else {
			object.tip.readOnly = "readonly";

	 	}


			// let tip = Number(amount * (key.slice(0, -1) / 100));
			// object.tip.value = tip;
			// object.total.value = amount + tip;

		// 	// object.tip.value = 4.66
		// 	object.tip.readOnly = "readonly";
		// 	object.tip.value = key;

		// if (Number(object.tip.value) === NaN) { return }
		// if (Number(object.tip.value) <= 0) { return }



		// fn_speak("Amount: " + object.amount.value);
	});

	object.amount = html.input(div, ["myDiv", "myButton"], 12);

	html.number(div, ["myDiv"], "Amount");

	div = html.div(main, ["myDiv"]);

	html.button(div, ["myDiv", "myButton"], "🗣️", (event) => {

		if (Number(object.tip.value) === NaN) { return }
		if (Number(object.tip.value) <= 0) { return }
		fn_speak("Tip: " + object.tip.value);
	});

	object.tip = html.input(div, ["myDiv", "myButton"], 12);

	object.select = html.select(div, ["myDiv", "myButton"], (event) => {

	});
	html.options(object.select, tips, true);

	div = html.div(main, ["myDiv"]);

	html.hr(div);

	div = html.div(main, ["myDiv"]);

	html.button(div, ["myDiv", "myButton"], "🗣️", (event) => {

		if (Number(object.total.value) === NaN) { return }
		if (Number(object.total.value) <= 0) { return }
		fn_speak("Total: " + object.total.value);
	});

	object.total = html.input(div, ["myDiv", "myButton"], 12, true);

	html.number(div, ["myDiv"], "Total");
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
fn_app("Tips");
