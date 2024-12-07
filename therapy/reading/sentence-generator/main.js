'use strict';

let idSelection = document.getElementById("idSelection");
let idRead = document.getElementById("idRead");
let idWrite = document.getElementById("idWrite");
let idShowHide = document.getElementById("idShowHide");
let idNumber = document.getElementById("idNumber");

let exceptTheseLetters = 2; 
let numberTheseLetters = 3;
let showHide = true;

let local_storage = "sentence-generator";

let selections = [{
	name: "The Cost of Speed",
	key: "the-cost-of-speed",
}, {
    name: "Ancient Song",
    key: "ancient-song",
}];

let req = {
    selection: (idSelection.dataset.files
         + idSelection.value
         + idSelection.dataset.txt),
    array: [],
    length: 0,
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

function fn_show_hide_write(text) {

    const re = /[A-Za-z-]+/g;
    const all = [...text.matchAll(re)];

    const min = 3;
    const max = 3;
    
    let hide = text;
    for (let i=0; i<all.length; i++) {
        
        let str = String(all[i]).toString();
        let idx = all[i].index;
        let len = str.length;

        let rand = [];
        for (let j=0; j<str.length; j++) {
            rand.push(j);
        }
        rand = my_shuffle(rand);

        let start = hide.slice(0, idx);
        let end = hide.slice(idx + len);
        if (len > min && len <= max) {
            hide = start + '_'.repeat(len) + end;
        }
        else if (len > max) {
            for (let k=0; k<max; k++) {
                str = str.slice(0, rand[k]) + "_" + str.slice(rand[k]+1);
            }
            hide = start + str + end;
        }
    }

    return {
        show: text,
        write: '',
        hide: hide,
    };
}

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

            req.array = [];
            req.length = 0;

            let arr = data.replaceAll(/\[[a-z0-9]+\]/g, '').replaceAll('\n', ' ').split(' ').filter((t) => t !== '');
            let txt = '';

            let re1 = /^([^\.!\?]+)$/g;
            let re2 = /^([A-Z\.!,'\?]+)$/g;

            for (let i=0; i<arr.length; i++) {
                txt += arr[i];
                if (arr[i].match(re1) || arr[i].match(re2)) {
                    txt += ' ';
                }
                else {
                    
                    // <<period>> - ".", <<exclamation>> - "!", <<question>> - "?"
                    txt = txt.replaceAll("<<period>>", ".")
                    txt = txt.replaceAll("<<exclamation>>", "!")
                    txt = txt.replaceAll("<<question>>", "?");
                    
                    req.array.push(fn_show_hide_write(txt));
                    txt = '';
                }
            }
            if (txt !== '') { 
                
                // <<period>> - ".", <<exclamation>> - "!", <<question>> - "?"
                txt = txt.replaceAll("<<period>>", ".")
                txt = txt.replaceAll("<<exclamation>>", "!")
                txt = txt.replaceAll("<<question>>", "?");
                
                req.array.push(fn_show_hide_write(txt));
                txt = '';
            }

            idRead.value = showHide
                ? req.array[req.length].hide
                : req.array[req.length].show;
            idWrite.value = "";
            idNumber.innerHTML = req.length + 1;
        })
        .catch((error) => {
            console.error(`Error: ${error.message}`);
        });
}
fn_selection();

function fn_previous() {

    if (idWrite.value !== '') {
        req.array[req.length].write = idWrite.value;
    }

    if (req.length <= 0) {
        req.length = req.array.length;
    }
    req.length--;

    idRead.value = showHide
        ? req.array[req.length].hide
        : req.array[req.length].show;
    idWrite.value = "";
    idNumber.innerHTML = req.length + 1;
}

function fn_play(selection) {
    if (selection === true) {
        let start = idRead.selectionStart;
        let finish = idRead.selectionEnd;
        let sel = idRead.value.substring(start, finish);
        if (sel !== 0) { my_speak(sel); }
    }
    else {
        my_speak(req.array[req.length].show);
    }
}

function fn_show_hide() {

    idShowHide.innerHTML = showHide ? 'Hide' : 'Show';
    showHide = !showHide;

    idRead.value = showHide
        ? req.array[req.length].hide
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

    idRead.value = showHide
        ? req.array[req.length].hide
        : req.array[req.length].show;
    idWrite.value = "";
    idNumber.innerHTML = req.length + 1;
}

function fn_write() {

    let words = [];




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





/*
let req = {
    plot: (idSelection.dataset.files
         + idSelection.value
         + idSelection.dataset.txt),
    show: [],
    hide: [],
    showHide: true,
    length: 0,
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

    req.plot = (idSelection.dataset.files
        + idSelection.value
        + idSelection.dataset.txt);

    //console.log(req);

    fetch(new Request(req.plot))
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error, status = ${response.status}`);
            }
            return response.text();
        })
        .then((data) => {

            req.arrayShow = [];
            req.arrayHide = [];
            req.length = 0;

            let arr = data.replaceAll(/\[[a-z0-9]+\]/g, '').replaceAll('\n', ' ').split(' ').filter((t) => t !== '');
            let txt = '';

            let re1 = /^([^\.!\?]+)$/g;
            let re2 = /^([A-Z\.!,'\?]+)$/g;

            for (let i=0; i<arr.length; i++) {
                txt += arr[i];
                if (arr[i].match(re1) || arr[i].match(re2)) {
                    txt += ' ';
                }
                else {
                	
                	// <<period>> - ".", <<exclamation>> - "!", <<question>> - "?"
                	txt = txt.replaceAll("<<period>>", ".")
                	txt = txt.replaceAll("<<exclamation>>", "!")
                	txt = txt.replaceAll("<<question>>", "?");
                    
                    req.arrayShow.push(txt);
                    txt = '';
                }
            }
            if (txt !== '') { 
				
				// <<period>> - ".", <<exclamation>> - "!", <<question>> - "?"
            	txt = txt.replaceAll("<<period>>", ".")
            	txt = txt.replaceAll("<<exclamation>>", "!")
            	txt = txt.replaceAll("<<question>>", "?");
				
				req.arrayShow.push(txt);
				txt = '';
           	}

            idSentence.value = req.arrayShow[req.length];
            idNumber.innerHTML = req.length + 1;
        })
        .catch((error) => {
            console.error(`Error: ${error.message}`);
        });
}
fn_selection();

function fn_previous() {
    if (req.length <= 0) {
        req.length = req.arrayShow.length;
    }
    req.length--;
    idSentence.value = req.arrayShow[req.length];
    idNumber.innerHTML = req.length + 1;
}

function fn_play(selection) {
	if (selection === true) {
	    let start = idSentence.selectionStart;
	    let finish = idSentence.selectionEnd;
	    let sel = idSentence.value.substring(start, finish);
	    if (sel !== 0) { my_speak(sel); }
	}
	else {
    	my_speak(req.arrayShow[req.length]);
	}
}

function fn_show_hide() {
    idShowHide.innerHTML = req.showHide ? 'Hide' : 'Show';
    req.showHide = !req.showHide;
}

function fn_next() {
    if (req.length >= req.arrayShow.length - 1) {
        req.length = -1;
    }
    req.length++;
    idSentence.value = req.arrayShow[req.length];
    idNumber.innerHTML = req.length + 1;
}
*/
