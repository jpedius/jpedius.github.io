'use strict';

const APPLICATION_WIDTH  = 800;
const APPLICATION_HEIGHT = 800;

const CIRCLE_WIDTH  = 400;
const CIRCLE_HEIGHT = 400;

const TIME_HOUR   = 7;
const TIME_MINUTE = 45;

const CLOCK_2_PI   = 2 * Math.PI;
const CLOCK_HOUR   = CLOCK_2_PI / 12;
const CLOCK_MINUTE = CLOCK_2_PI / 60;

let minute = CLOCK_MINUTE * TIME_MINUTE;
let hour   = (CLOCK_HOUR + ((minute/60) * CLOCK_HOUR)) * TIME_HOUR;

let remainder = TIME_HOUR % 12;
let clock = [ 9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8 ];

let start = clock[remainder] * CLOCK_HOUR;
let end   = start + CLOCK_HOUR;

const canvas = document.getElementById("canvas");

canvas.width  = APPLICATION_WIDTH;
canvas.height = APPLICATION_HEIGHT;

const ctx = canvas.getContext("2d");

// Edge of canvas
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.strokeRect(0, 0, APPLICATION_WIDTH, APPLICATION_HEIGHT);

// Clock circle
ctx.beginPath();
ctx.lineWidth = 10;
ctx.strokeStyle = "blue";
ctx.arc(CIRCLE_WIDTH, CIRCLE_HEIGHT, 375, 0, CLOCK_2_PI);
ctx.stroke();

// Numbers starting at four
ctx.translate(CIRCLE_WIDTH, CIRCLE_HEIGHT);
ctx.fillStyle = "green";
ctx.beginPath();
for (let i=0; i<12; i++) {
	ctx.rect(360, -10, 20, 20);
	ctx.fill();
	ctx.rotate(CLOCK_HOUR);
}
ctx.setTransform(1, 0, 0, 1, 0, 0);

ctx.translate(CIRCLE_WIDTH, CIRCLE_HEIGHT);
ctx.fillStyle = "purple";
ctx.beginPath();
ctx.rotate(minute);
ctx.rect(-10, -330, 20, 340);
ctx.fill();
ctx.setTransform(1, 0, 0, 1, 0, 0);

ctx.translate(CIRCLE_WIDTH, CIRCLE_HEIGHT);
ctx.fillStyle = "black";
ctx.beginPath();
ctx.rotate(hour);
ctx.rect(-10, -230, 20, 240);
ctx.fill();
ctx.setTransform(1, 0, 0, 1, 0, 0);

ctx.strokeStyle = "gray";
ctx.beginPath();
ctx.lineWidth = 15;
ctx.arc(CIRCLE_WIDTH, CIRCLE_HEIGHT, 275, start, end);
ctx.stroke();

ctx.translate(CIRCLE_WIDTH, CIRCLE_HEIGHT);
ctx.fillStyle = "violet";
ctx.beginPath();
ctx.arc(0, 0, 20, 0, CLOCK_2_PI);
ctx.fill();
ctx.setTransform(1, 0, 0, 1, 0, 0);
