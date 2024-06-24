'use strict';

let howMany = [];
let previousOrNext = 0;

let my_start = 0
let my_end   = 20

for (let i=my_start; i<my_end; i++) {
	for (let j=my_start; j<my_end; j++) {
		howMany.push({
			'a': String(i),
			'b': String(j),
			'ab': String(i+j),
		})
	}
}
howMany = my_shuffle(howMany);

let my_equals = document.getElementById('my_equals');

function fn_previous() {
    if (previousOrNext <= 0) {
        previousOrNext = howMany.length;
    }
    previousOrNext--;
    my_equals.value = ''
}

function fn_plus() {
	let i = howMany[previousOrNext]
	my_speak(i.a + ' plus ' + i.b);
}

function fn_equals() {
	if (my_equals.value !== '') {
		let i = howMany[previousOrNext]
		my_speak('equals ' + i.ab)
	}
}

function fn_next() {
    if (previousOrNext >= howMany.length - 1) {
        previousOrNext = -1;
    }
    previousOrNext++;
    my_equals.value = ''
}
