'use strict';

let idReadingFiveTimes = document.getElementById("idReadingFiveTimes");
let idSpellingAWord = document.getElementById("idSpellingAWord");

let json = null;
let settings = null;
let text = null;

json = localStorage.getItem("reading-five-times");
settings = JSON.parse(json);
text = JSON.stringify(settings, null, "\t");
idReadingFiveTimes.value = text;

json = localStorage.getItem("spelling-a-word");
settings = JSON.parse(json);
text = JSON.stringify(settings, null, "\t");
idSpellingAWord.value = text;
