"use strict";

export function fn_books() {

	let element = [{
		"name": "Alice’s Adventures in Wonderland",
		"key": "/gutenberg/text/alices-adventures-in-wonderland.txt",
	}, {
		"name": "Through the Looking-Glass",
		"key": "/gutenberg/text/through-the-looking-glass.txt",
	}, {
		"name": "Peter Pan",
		"key": "/gutenberg/text/peter-pan.txt",
	}];

	return element;
}

export class MyBook {

	constructor(data) {

		this.myArray = [];
		this.myWords = [];
		this.myNumber = 0;

		let previous = 0;
		data.split("\n").forEach((element) => {
			let item = element.split(" ").filter((x) => x != "");
			if (item.length !== 0 || previous !== 0) {
				this.myArray.push(item);
			}
			previous = item.length;
		});

		let words = [];
		let column = 0;
		let line = 0;
		let re = /[.,:;!?”)]$/;

		for (let i=0; i<this.myArray.length; i++) {
			if (this.myArray[i].length !== 0) {
				for (let j=0; j<this.myArray[i].length; j++) {
					words.push({
						"word": this.myArray[i][j],
						"column": column,
						"line": line,
					});
					if (this.myArray[i][j].match(re)) {
						this.myWords.push(words);
						words = [];
					}
					if (this.myArray[i].length === column + 1) {
						column = 0;
						line += 1;
					}
					else {
						column += 1;
					}
				}
			}
			else {
				if (words.length !== 0) {
					this.myWords.push(words);
					words = [];
				}
				column = 0;
				line += 1;
			}
		}
	}

	array() { return this.myArray; }

	total() { return this.myWords.length; }

	span(text, css, disabled) {

		for (let i=0; i<this.myWords[this.myNumber].length; i++) {
			let words = this.myWords[this.myNumber][i];
			let span = text.childNodes[words.line].childNodes[words.column];
			disabled ? span.classList.add(css) : span.classList.remove(css);
		}
	}

	previous() {

		if (this.myNumber <= 0) {
			this.myNumber = this.myWords.length;
		}
		this.myNumber -= 1;

		return this.myNumber + 1;
	}

	play() {

		let words = this.myWords[this.myNumber];

		return words.map(({ "word": word }) => word ).join(" ");
	}

	next() {

		if (this.myNumber >= this.myWords.length - 1) {
			this.myNumber = -1;;
		}
		this.myNumber += 1;

		return this.myNumber + 1;
	}

	go_to(value) {

		this.myNumber = Number(value) - 1;

		return this.myNumber + 1;
	}
}
