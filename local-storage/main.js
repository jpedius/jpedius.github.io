'use strict';

let idReadingFiveTimes = document.getElementById("idReadingFiveTimes");
let idSpellingAWord = document.getElementById("idSpellingAWord");
let idSentenceGenerator = document.getElementById("idSentenceGenerator");
let idCollectSomeWords = document.getElementById("idCollectSomeWords");

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

json = localStorage.getItem("sentence-generator");
settings = JSON.parse(json);
text = JSON.stringify(settings, null, "\t");
idSentenceGenerator.value = text;

json = localStorage.getItem("collect-some-words");
settings = JSON.parse(json);
text = JSON.stringify(settings, null, "\t");
idCollectSomeWords.value = text;