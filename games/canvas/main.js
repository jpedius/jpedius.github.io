'use strict';

const canvas = document.getElementById('game');

const GAME_WIDTH  = canvas.width;
const GAME_HEIGHT = canvas.height;

function init() {

	window.requestAnimationFrame(draw);
}

function draw() {

	const ctx = canvas.getContext('2d');

	window.requestAnimationFrame(draw);
}

init();
