'use strict';

let kind = document.getElementById('kind');
let read = document.getElementById('read');
let number = document.getElementById('number');

let req = {
    plot: (kind.dataset.files
        + kind.value
        + kind.dataset.txt),
    array: [],
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
            req.length = 0;

            let arr = data.replaceAll('\n', ' ').split(' ').filter((t) => t !== '');
            let txt = '';

            let re1 = /^([^\.!\?]+)$/g;
            let re2 = /^([A-Z\.!,'\?]+)$/g;
            for (let i=0; i<arr.length; i++) {
                txt += arr[i];
                if (arr[i].match(re1) || arr[i].match(re2)) {
                    txt += ' ';
                }
                else {
                    req.array.push(txt);
                    txt = '';
                }
            }
            if (txt !== '') { req.array.push(txt) }

            read.value = req.array[req.length];
            number.innerHTML = req.length + 1;
        })
        .catch((error) => {
            console.error(`Error: ${error.message}`);
        });
}
my_kind();

function my_previous() {
    if (req.length <= 0) {
        req.length = req.array.length;
    }
    req.length--;
    read.value = req.array[req.length];
    number.innerHTML = req.length + 1;
}

function my_play_selection() {
    let start = read.selectionStart;
    let finish = read.selectionEnd;
    let sel = read.value.substring(start, finish);
    if (sel !== 0) {
        my_speak(sel);
    }
}

function my_play_all() {
    my_speak(req.array[req.length]);
}

function my_next() {
    if (req.length >= req.array.length - 1) {
        req.length = -1;
    }
    req.length++;
    read.value = req.array[req.length];
    number.innerHTML = req.length + 1;
}
