'use strict';

let catan = {

	'cards': {
		'brick':  3,
		'desert': 1,
		'grain':  4,
		'lumber': 4,
		'ore':    3,
		'wool':   4,
	},

	'a': [
		['?',      '3:1'],
		['brick',  '2:1'],
		['lumber', '2:1'],
		['grain',  '2:1'],
		['ore',    '2:1'],
		['wool',   '2:1'],
	],

	'board': [[
		null,
		null,
		['?', '3:1'],
		null,
		null,
	], [
		['?', '3:1'],
		null,
		null,
		['brick', '2:1'],
		null,
	], [
		null,
		null,
		['lumber', '2:1'],
		null,
		null,
	], [
		['?', '3:1'],
		null,
		null,
		['grain', '2:1'],
		null,
	], [
		null,
		null,
		['ore', '2:1'],
		null,
		null,
	], [
		['?', '3:1'],
		null,
		null,
		['wool', '2:1'],
		null,

	]],

	'robber': 7,

	'game': [{
		'key':     16,
		'tile':   'ore',
		'letter': 'A',
		'number':  5,
		'dots':    4,
	}, {
		'key':     17,
		'tile':   'grain',
		'letter': 'B',
		'number':  2,
		'dots':    1,
	}, {
		'key':     18,
		'tile':   'lumber',
		'letter': 'C',
		'number':  6,
		'dots':    5,
	}, {
		'key':     15,
		'tile':   'ore',
		'letter': 'D',
		'number':  3,
		'dots':    2,
	}, {
		'key':     11,
		'tile':   'grain',
		'letter': 'E',
		'number':  8,
		'dots':    5,
	}, {
		'key':     6,
		'tile':   'wool',
		'letter': 'F',
		'number':  10,
		'dots':    3,
	}, {
		'key':     2,
		'tile':   'grain',
		'letter': 'G',
		'number':  9,
		'dots':    4,
	}, {
		'key':     1,
		'tile':   'wool',
		'letter': 'H',
		'number':  12,
		'dots':    1,
	}, {
		'key':     0,
		'tile':   'lumber',
		'letter': 'I',
		'number':  11,
		'dots':    2,
	}, {
		'key':     3,
		'tile':   'brick',
		'letter': 'J',
		'number':  4,
		'dots':    3,
	}, {
		'key':     7,
		'tile':   'desert',
		'letter': '',
		'number':  0,
		'dots':    0,
	}, {
		'key':     12,
		'tile':   'brick',
		'letter': 'K',
		'number':  8,
		'dots':    5,
	}, {
		'key':     13,
		'tile':   'wool',
		'letter': 'L',
		'number':  10,
		'dots':    3,
	}, {
		'key':     14,
		'tile':   'wool',
		'letter': 'M',
		'number':  9,
		'dots':    4,
	}, {
		'key':     10,
		'tile':   'lumber',
		'letter': 'N',
		'number':  4,
		'dots':    3,
	}, {
		'key':     5,
		'tile':   'brick',
		'letter': 'O',
		'number':  5,
		'dots':    4,
	}, {
		'key':     4,
		'tile':   'ore',
		'letter': 'P',
		'number':  6,
		'dots':    5,
	}, {
		'key':     8,
		'tile':   'lumber',
		'letter': 'Q',
		'number':  3,
		'dots':    2,
	}, {
		'key':     9,
		'tile':   'grain',
		'letter': 'R',
		'number':  11,
		'dots':    2,
	}],

	'building-cost': {
		'road': ['lumber', 'brick'],
		'settlement': ['lumber', 'brick', 'grain', 'wool'],
		'city': ['grain', 'grain', 'ore', 'ore', 'ore'],
		'development card': ['grain', 'wool', 'ore'],
	},
};

localStorage.clear();
localStorage.setItem('catan', JSON.stringify(catan));
localStorage.getItem('catan');

let a = [
	'                 / \\         / \\         / \\',
	'               /     \\     /     \\     /     \\',
	'             /         \\ /         \\ /         \\',
	'            |           |           |           |',
	'            |           |           |           |',
	'            |           |           |           |',
	'           / \\         / \\         / \\         / \\',
	'         /     \\     /     \\     /     \\     /     \\',
	'       /         \\ /         \\ /         \\ /         \\',
	'      |           |           |           |           |',
	'      |           |           |           |           |',
	'      |           |           |           |           |',
	'     / \\         / \\         / \\         / \\         / \\',
	'   /     \\     /     \\     /     \\     /     \\     /     \\',
	' /         \\ /         \\ /         \\ /         \\ /         \\',
	'|           |           |           |           |           |',
	'|           |           |           |           |           |',
	'|           |           |           |           |           |',
	' \\         / \\         / \\         / \\         / \\         /',
	'   \\     /     \\     /     \\     /     \\     /     \\     /',
	'     \\ /         \\ /         \\ /         \\ /         \\ /',
	'      |           |           |           |           |',
	'      |           |           |           |           |',
	'      |           |           |           |           |',
	'       \\         / \\         / \\         / \\         /',
	'         \\     /     \\     /     \\     /     \\     /',
	'           \\ /         \\ /         \\ /         \\ /',
	'            |           |           |           |',
	'            |           |           |           |',
	'            |           |           |           |',
	'             \\         / \\         / \\         /',
	'               \\     /     \\     /     \\     /',
	'                 \\ /         \\ /         \\ /',
];

// &nbsp;
let c = '';
for (let i=0; i<a.length; i++) {
	let k = '';
	for (let j=0; j<a[i].length; j++) {
		k += a[i][j] === ' ' ? '&nbsp;' : a[i][j];
	}
	c += k + '<br />';
}

//console.log('!', catan);
//console.log('@', c);

let root = document.getElementById('root');
root.innerHTML = c;
