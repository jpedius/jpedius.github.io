"use strict";

export class Entry {

	audio(element, src) {

		let item = document.createElement("audio");

		item.src = src;

		element.appendChild(item);

		return item;
	}

	button(element, css, text, click=null) {

		let item = document.createElement("button");
		item.classList.add(...css);

		item.innerHTML = text;
		item.addEventListener("click", click);

		element.appendChild(item);

		return item;
	}

	checkbox(element, css, checked, click=null) {

		let item = document.createElement("input");
		item.classList.add(...css);
		item.type = "checkbox";

		item.checked = checked;
		item.addEventListener("click", click);

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

	image(element, css, click=null) {

		let item = document.createElement("img");
		item.classList.add(...css);

		item.alt = "";
		item.addEventListener("click", click);

		element.appendChild(item);

		return item;
	}

	input(element, css, size, readonly=false) {

		let item = document.createElement("input");
		item.classList.add(...css);

		item.type = "text";
		item.autocomplete = "off";
		item.autocorrect = "off";
		item.autocapitalize = "off";
		item.size = size;
		if (readonly === true) { item.readOnly = "readonly"; }

		element.appendChild(item);

		return item;
	}

	label(element, css=null, text="") {

		let item = document.createElement("label");
		if (css !== null) { item.classList.add(...css); }
		
		item.innerHTML = text;
		
		element.appendChild(item);

		return item;
	}

	number(element, css, text) {

		let item = document.createElement("span");
		item.classList.add(...css);

		item.innerHTML = text;

		element.appendChild(item);

		return item;
	}

	optionsGroup(item, choose) {

		item.innerHTML = "";

		for (let i=0; i<choose.length; i++) {

			const optgroup = document.createElement("optgroup");
			optgroup.label = choose[i].group;
			item.appendChild(optgroup);

			for (let j=0; j<choose[i].options.length; j++) {
				const option = document.createElement("option");
				option.textContent = choose[i].options[j].name;
				option.value = choose[i].options[j].key;
				optgroup.appendChild(option);
			}
		}
	}

	range(element, css, min, max, step, value, click=null) {

		let item = document.createElement("input");
		item.classList.add(...css);

		item.type = "range";
		item.autocomplete = "off";
		item.autocorrect = "off";
		item.autocapitalize = "off";
		item.min = min;
		item.max = max;
		item.step = step;
		item.value = value;
		item.addEventListener("click", click);

		element.appendChild(item);

		return item;
	}

	select(element, css, choose, change=null) {

		let item = document.createElement("select");
		item.classList.add(...css);

		item.innerHTML = "";
		item.addEventListener("change", change);

		for (let i=0; i<choose.length; i++) {
	    	const option = document.createElement("option");
	    	option.textContent = choose[i].name;
			option.value = choose[i].key 	
	    	item.appendChild(option);
	    }

		element.appendChild(item);

		return item;
	}

	selectGroup(element, css, choose, size=0, change=null) {

		let item = document.createElement("select");
		item.classList.add(...css);

		item.size = size;
		item.addEventListener("change", change);

		this.optionsGroup(item, choose);

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

	textarea(element, css, row, column, readonly=false) {

		let item = document.createElement("textarea");
		item.classList.add(...css);

		item.autocomplete = "off";
		item.autocorrect = "off";
		item.autocapitalize = "off";
		item.rows = row;
		item.cols = column;
		if (readonly === true) { item.readOnly = "readonly"; }

		element.appendChild(item);

		return item;
	}
}
