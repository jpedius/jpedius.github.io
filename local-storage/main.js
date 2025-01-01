'use strict';

let idReadingFiveTimes = document.getElementById("idReadingFiveTimes");
let idSpellingAWord = document.getElementById("idSpellingAWord");
let idSentenceGenerator = document.getElementById("idSentenceGenerator");
let idCollectSomeWords = document.getElementById("idCollectSomeWords");

let idTextWords = document.getElementById("idTextWords");
let idSaveWords = document.getElementById("idSaveWords");

let json1 = localStorage.getItem("reading-five-times");
let settings1 = JSON.parse(json1);
let text1 = JSON.stringify(settings1, null, "\t");
idReadingFiveTimes.value = text1;

let json2 = localStorage.getItem("spelling-a-word");
let settings2 = JSON.parse(json2);
let text2 = JSON.stringify(settings2, null, "\t");
idSpellingAWord.value = text2;

let json3 = localStorage.getItem("sentence-generator");
let settings3 = JSON.parse(json3);
let text3 = JSON.stringify(settings3, null, "\t");
idSentenceGenerator.value = text3;

let json4 = localStorage.getItem("collect-some-words");
let settings4 = JSON.parse(json4);
let text4 = JSON.stringify(settings4, null, "\t");
idCollectSomeWords.value = text4;

function fn_save_words() {

	localStorage.removeItem("collect-some-words");

	let text = idTextWords.value;
	text = text.replaceAll('\t', '');
	text = text.replaceAll('\n', '');

	localStorage.setItem("collect-some-words", text);
}
