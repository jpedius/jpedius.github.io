'use strict';

let idSelection = document.getElementById("idSelection");
let idRead = document.getElementById("idRead");
let idWrite = document.getElementById("idWrite");
let idShowHide = document.getElementById("idShowHide");
let idNumber = document.getElementById("idNumber");

let local_storage = "sentence-generator";

let selections = [{
    name: "Tug of War",
    key:  "tug-of-war",
}, {
    name: "Coloring Time",
    key:  "coloring-time",
}, {
    name: "Ancient Song",
    key:  "ancient-song",
}, {
    name: "Step Right Up",
    key:  "step-right-up",
}, {
    name: "The Cost of Speed",
    key:  "the-cost-of-speed",
}, {
    name: "How to Scare a Bear",
    key:  "how-to-scare-a-bear",
}];

let days_of_the_week = [
    { item: "sunday",    mini: "sun" },
    { item: "monday",    mini: "mon" },
    { item: "tuesday",   mini: "tue" },
    { item: "wednesday", mini: "wed" },
    { item: "thursday",  mini: "thu" },
    { item: "friday",    mini: "fri" },
    { item: "saturday",  mini: "sat" },
];

let req = {
    selection: (idSelection.dataset.files
         + idSelection.value
         + idSelection.dataset.txt),
    array: [],
    length: 0,
    showHide: true,
};

function fn_options() {
    idSelection.innerHTML = '';
    for (let i=0; i<selections.length; i++) {
        const option = document.createElement('option');
        option.textContent = selections[i].name;
        option.value = selections[i].key;
        idSelection.appendChild(option);
    }
}
fn_options();

function fn_selection() {

    req.selection = (
          idSelection.dataset.files
        + idSelection.value
        + idSelection.dataset.txt);

    fetch(new Request(req.selection))
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error, status = ${response.status}`);
            }
            return response.text();
        })
        .then((data) => {
            fn_request(data);
        })
        .catch((error) => {
            console.error(`Error: ${error.message}`);
        });
}
fn_selection();

function fn_request(data) {

    req.array = [];
    req.length = 0;

    let array = data;
    array = array.replaceAll('\n', ' ');
    array = array.split(' ');
    for (let i=0; i<array.length; i++) {
        array[i] = array[i].trim();
    }
    array = array.filter((t) => t !== '' );

    let showHidden = [];
    for (let i=0; i<array.length; i++) {

        let rand = [];
        for (let j=0; j<array[i].length; j++) {
            rand.push(j);
        }
        rand = my_shuffle(rand);

        let hidden = array[i];
        if (array[i].length > 2) {
            for (let j=0; j<array[i].length; j++) {

                let start = hidden.slice(0, rand[j]);
                let end = hidden.slice(rand[j] + 1);
                hidden = start + "_" + end;

                if (j >= 2) { break; }
            }
        }

        showHidden.push({
            show: array[i],
            hidden: hidden,
        });

        let end = array[i];
        if (end.endsWith('.') || end.endsWith('!') || end.endsWith('?')) {

            let text1 = '';
            let text2 = '';
            for (let j=0; j<showHidden.length; j++) {
                text1 += showHidden[j].show + ' ';
                text2 += showHidden[j].hidden + ' ';
            }

            req.array.push({
                show: text1.trim(),
                hidden: text2.trim(),
                write: '',
            });

            showHidden = [];
        }
    }

    fn_sentence_text();
}

function fn_sentence_text() {

    idRead.value = req.showHide
        ? req.array[req.length].hidden
        : req.array[req.length].show;
    idWrite.value = req.array[req.length].write;
    idNumber.innerHTML = req.length + 1;
}

function fn_previous() {

    if (idWrite.value !== '') {
        req.array[req.length].write = idWrite.value;
    }

    if (req.length <= 0) {
        req.length = req.array.length;
    }
    req.length--;

    fn_sentence_text();
}

function fn_play(selection) {
    if (selection === true) {
        let text = req.array[req.length].show;
        let start = idRead.selectionStart;
        let finish = idRead.selectionEnd;
        let sel = text.substring(start, finish);
        if (sel !== 0) { my_speak(sel); }
    }
    else {
        my_speak(req.array[req.length].show);
    }
}

function fn_show_hide() {

    idShowHide.innerHTML = req.showHide ? 'Hide' : 'Show';
    req.showHide = !req.showHide;

    idRead.value = req.showHide
        ? req.array[req.length].hidden
        : req.array[req.length].show;
}

function fn_next() {

    if (idWrite.value !== '') {
        req.array[req.length].write = idWrite.value;
    }

    if (req.length >= req.array.length - 1) {
        req.length = -1;
    }
    req.length++;

    fn_sentence_text();
}

function fn_write() {

    let words = [];
    for (let i=0; i<req.array.length; i++) {
        let item = req.array[i].show + "," + req.array[i].write;
        words.push(item);
    }

    let json = localStorage.getItem(local_storage);
    let settings = JSON.parse(json);
    let day = (new Date(Date.now())).getDay();

    settings[days_of_the_week[day].item] = words;
    localStorage.setItem(local_storage, JSON.stringify(settings));
}

function fn_copy() {

    let json = localStorage.getItem(local_storage);
    let settings = JSON.parse(json);

    let text = JSON.stringify(settings, null, "\t");
    fn_write_clipboard_text(text);
}

async function fn_write_clipboard_text(text) {

    try {
        await navigator.clipboard.writeText(text);
    } catch (error) {
        console.error(error.message);
    }
}

function fn_clear() {

    idWrite.value = "";

    const settings = {
        sunday: [],
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
    };

    localStorage.removeItem(local_storage);
    localStorage.setItem(local_storage, JSON.stringify(settings));
}
