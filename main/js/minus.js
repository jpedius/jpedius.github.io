'use strict'

function fn_difference(items, minus) {

	let a = new Set(items);
	let b = new Set(minus);

	let diff = a.difference(b);

	return [...diff];
}
