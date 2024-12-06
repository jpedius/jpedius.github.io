'use strict';

let idReadingFiveTimes = document.getElementById("idReadingFiveTimes");
let json = localStorage.getItem("reading-five-times");
let settings = JSON.parse(json);
let text = JSON.stringify(settings, null, "\t");
idReadingFiveTimes.value = text;
