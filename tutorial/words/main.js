'use strict';

let read = document.getElementById('read');
let write = document.getElementById('write');
let label = document.getElementById('label');
let number = document.getElementById('number');
let show_hide = document.getElementById('show_hide');

let howMany = null;
let previousOrNext = 0;
let showHide = true;

function my_words() {

    let w = [];
    words.forEach((event) => {
        event.forEach((item) => {

            let hide = item;

            let rand = [];
            for (let i=0; i<hide.length; i++) {
                rand.push(i)
            }
            rand = my_shuffle(rand);

            let num = number.value;
            if (item.length <= num) {
                hide = '-'.repeat(item.length);
            }
            else {
                for (let i=0; i<num; i++) {
                    hide = hide.slice(0, rand[i]) + '-' + hide.slice(rand[i]+1);
                }
            }

            w.push({ show: item, hide: hide, random: rand });
        });
    });
    w = my_shuffle(w);
    return w;
}
howMany = my_words();

function my_read_and_write(tf) {
    read.value = showHide
        ? howMany[previousOrNext].hide
        : howMany[previousOrNext].show;
    if (tf) { write.value = ''; }
}
my_read_and_write(true);

function my_number() {

    label.innerHTML = 'Number: ' + number.value;
    let num = Number(number.value)

    howMany.forEach((item) => {
        let hide = item.show;
        if (item.show.length <= num) {
            hide = '-'.repeat(item.show.length);
        }
        else {
            for (let i=0; i<num; i++) {
                hide = hide.slice(0, item.random[i]) + '-' + hide.slice(item.random[i]+1);
            }
        }
        item.hide = hide;
    });

    my_read_and_write(true);
}

function my_previous() {
    if (previousOrNext <= 0) {
        previousOrNext = howMany.length;
    }
    previousOrNext--;
    return my_read_and_write(true);
}

function my_play() {
    my_speak(howMany[previousOrNext].show);
}

function my_show_hide() {
    show_hide.innerHTML = showHide ? 'Hide' : 'Show';
    showHide = !showHide;
    my_read_and_write(false);
}

function my_next() {
    if (previousOrNext >= howMany.length - 1) {
        previousOrNext = -1;
    }
    previousOrNext++;
    return my_read_and_write(true);
}
