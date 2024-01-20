'use strict';

const synth = window.speechSynthesis;
let voices = [];
let she_voice = null;

let my_all = null;

let my_read = document.getElementById('my_read');
let my_write = document.getElementById('my_write');

let my_previous = document.getElementById('my_previous');
let my_play = document.getElementById('my_play');
let my_show_hide = document.getElementById('my_show_hide');
let my_next = document.getElementById('my_next');

let my_label = document.getElementById('my_label');
let my_number = document.getElementById('my_number');

let my_length = 0;
let my_show = true;

function my_populateVoiceList() {

    // Sorted by
    voices = synth.getVoices().sort(function (a, b) {
        const aname = a.name.toUpperCase();
        const bname = b.name.toUpperCase();
        if (aname < bname) {
            return -1;
        } else if (aname == bname) {
            return 0;
        } else {
            return +1;
        }
    });

    let voice = null;
    for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === 'Samantha') {
            voice = voices[i];
            break;
        }
    }

    she_voice = voice
}

my_populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = my_populateVoiceList;
}

function my_speak(talk) {

    if (synth.speaking) {
        console.error("speechSynthesis.speaking");
        return;
    }

    if ((my_read.value).trim() !== '') {

        const utterThis = new SpeechSynthesisUtterance(talk);

        utterThis.onend = function (event) {
            console.log("SpeechSynthesisUtterance.onend");
        };

        utterThis.onerror = function (event) {
            console.error("SpeechSynthesisUtterance.onerror");
        };

        utterThis.voice = she_voice;
        utterThis.pitch = 1;
        utterThis.rate = 0.7;
        synth.speak(utterThis);
    }
}

function my_shuffle(array) {

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

function my_all_words(words, num) {
	let w = [];
	words.forEach((event) => {
		event.forEach((item) => {

			let h = item;

			let rand = [];
			for (let i=0; i<h.length; i++) {
				rand.push(i)
			}
			rand = my_shuffle(rand);

			if (item.length <= num) {
				h = '-'.repeat(item.length);
			}
			else {
				for (let i=0; i<num; i++) {
					h = h.slice(0, rand[i]) + '-' + h.slice(rand[i]+1);
				}
			}

			w.push({ show: item, hide: h, random: rand });
		});
	});
	w = my_shuffle(w);
	return w;
}
my_all = my_all_words(my_words, my_number.value);

function my_previous_button() {
	if (my_length <= 0) { my_length = my_all.length; }
	my_length--;
	my_read_and_write(true);
}

function my_play_button() {
    my_speak(my_all[my_length].show);
}

function my_show_hide_button() {
	my_show_hide.innerHTML = my_show ? 'Hide' : 'Show';
	my_show = !my_show;
	my_read_and_write(false);
}

function my_next_button() {
	if (my_length >= my_all.length - 1) { my_length = -1; }
	my_length++;
	my_read_and_write(true);
}

function my_number_button() {

	my_label.innerHTML = 'Number: ' + my_number.value;
	let num = Number(my_number.value)

	my_all.forEach((item) => {
		let h = item.show;
		if (item.show.length <= num) {
			h = '-'.repeat(item.show.length);
		}
		else {
			for (let i=0; i<num; i++) {
				h = h.slice(0, item.random[i]) + '-' + h.slice(item.random[i]+1);
			}
		}
		item.hide = h;
	});

	my_read_and_write(true);
}

function my_read_and_write(tf) {
	my_read.value = my_show
		? my_all[my_length].hide
		: my_all[my_length].show;
	if (tf) { my_write.value = ''; }
}
my_read_and_write(true);
