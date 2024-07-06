'use strict';

let kind = document.getElementById('kind');
let read = document.getElementById('read');
let write = document.getElementById('write');
let number = document.getElementById('number');

let word = 0;

let req = {
    plot: (kind.dataset.files
        + kind.value
        + kind.dataset.txt),
    array: [],
    words: [],
    length: 0,
};

function my_options() {
    kind.innerHTML = '';
    for (let i=0; i<plots.length; i++) {
        const optgroup = document.createElement('optgroup');
        optgroup.label = plots[i].group;
        kind.appendChild(optgroup);
        for (let j=0; j<plots[i].options.length; j++) {
            const option = document.createElement('option');
            option.textContent = plots[i].options[j].name;
            option.value = plots[i].options[j].key;
            optgroup.appendChild(option);
        }
    }
}
my_options();

function my_kind() {

    req.plot = (kind.dataset.files
        + kind.value
        + kind.dataset.txt);

    fetch(new Request(req.plot))
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error, status = ${response.status}`);
            }
            return response.text();
        })
        .then((data) => {

            req.array = [];
            req.words = [];
            req.length = 0;

            let arr = data.replaceAll(/\[[a-z0-9]+\]/g, '').replaceAll('\n', ' ').split(' ').filter((t) => t !== '');

            let words = [];
            let snake = [];

            let re1 = /^([^\.!\?]+)$/g;
            let re2 = /^([A-Z\.!,'\?]+)$/g;
            for (let i=0; i<arr.length; i++) {

                words.push(arr[i]);
                snake.push('_'.repeat(arr[i].length));

                if (!(arr[i].match(re1) || arr[i].match(re2))) {
                    req.array.push(words);
                    req.words.push(snake);
                    words = [];
                    snake = [];
                }
            }

            if (words.length !== 0) {
                req.array.push(words);
                req.words.push(snake);
            }

            console.log(req);

            read.value = my_sentence(req.words);

            number.innerHTML = req.length + 1;
        })
        .catch((error) => {
            console.error(`Error: ${error.message}`);
        });
}
my_kind();

function my_sentence(s) {
    let x = '';
    for (let i=0; i<s[req.length].length; i++) {
        x += s[req.length][i] + ' ';
    }
    return x;
}

function my_previous() {
    if (req.length <= 0) {
        req.length = req.array.length;
    }
    req.length--;
    number.innerHTML = req.length + 1;
    word = 0;
    read.value = my_sentence(req.words);
    write.value = '';
}

function my_play_each() {
    my_speak(req.array[req.length][word]);
}

function my_play_read() {
    if (write.value !== '') {
        my_speak(write.value);
    }
}

function my_next_word() {

    if (req.array[req.length].length !== word) {
        let pos = '';
        for (let i=0; i<req.array[req.length].length; i++) {
            pos += req.array[req.length][i] + ' ';
            if (word === i) {
                break;
            }
        }
        for (let i=0; i<req.words[req.length].length; i++) {
            if (i > word) {
                pos += req.words[req.length][i] + ' ';
            }
        }
        word += 1;
        read.value = pos.trim();
        write.value = '';
    }
}

function my_play_all() {
    my_speak(my_sentence(req.array));
}

function my_next() {
    if (req.length >= req.array.length - 1) {
        req.length = -1;
    }
    req.length++;
    number.innerHTML = req.length + 1;
    word = 0;
    read.value = my_sentence(req.words);
    write.value = '';
}
