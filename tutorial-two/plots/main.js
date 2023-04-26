'use strict';

let src = {

    sentences: (sentences.dataset.files
        + sentences.value
        + sentences.dataset.txt),
        
    text:'',
    words: words.value,
};

let howMany = [];
let previousOrNext = 0;

clickSelectSentences();

function shuffle(array) {

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

function clickSelectSentences() {

    src.sentences = (sentences.dataset.files
        + sentences.value
        + sentences.dataset.txt);

    fetch(new Request(src.sentences))
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error, status = ${response.status}`);
            }
            return response.text();
        })
        .then((data) => {

            let reWhole = /[^\.!\?]+[\.!\?]+/g;
            let reComma = /[^\.!\?,]+[\.!\?,]+/g;

            src.text = data.trim().match(reWhole).map(function (x) {
                return x.trim().match(reComma).map(function (y) {
                    return y.trim().split(' ');
                });
            });
            
            src.words = words.value;
            if ('whole' === words.value) {
                howMany = src.text.map(function (x) {
                    return x.map(function (y) {
                        return y.join(' ');
                    }).join(' ');
                });
            }
            else if ('comma' === words.value) {
                howMany = src.text.flat(1).map(function (x) {
                    return x.join(' ');
                });
            }
            else if ('words' === words.value) {
                howMany = src.text.flat(2);
            }
            previousOrNext = 0;
            
            text.value = howMany[previousOrNext];
        })
        .catch((error) => {
            console.error(`Error: ${error.message}`);
        });
}

function clickButtonPrevious() {
	if (previousOrNext <= 0) {
		previousOrNext = howMany.length;
	}
	previousOrNext--;
	text.value = howMany[previousOrNext];
}

function clickButtonPlay() {
	speak(text.value);
}

function clickButtonNext() {
	if (previousOrNext >= howMany.length - 1) {
		previousOrNext = -1;
	}
	previousOrNext++;
	text.value = howMany[previousOrNext];
}

function clickButtonMode() {
	let element = document.body;
	element.classList.toggle('darkModeButton');
}
