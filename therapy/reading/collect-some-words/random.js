'use strict'

function fn_shuffle(array) {

	let items = JSON.parse(JSON.stringify(array));
	let currentIndex = items.length, randomIndex;

	// While there remain elements to shuffle...
	while (currentIndex !== 0) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[items[currentIndex], items[randomIndex]] = [
		items[randomIndex], items[currentIndex]];
	}

	return items;
}

function fn_difference(items, minus) {

	let a = new Set(items);
	let b = new Set(minus);

	let diff = a.difference(b);

	return [...diff];
}
