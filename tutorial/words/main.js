'use strict';

let words = document.getElementById('words');
let checkboxes = setCheckboxes(words);

let show = false;
let readonly = document.getElementById('readonly');
let text = document.getElementById('text');

let label = document.getElementById('label');
let number = document.getElementById('number');

let previousOrNext = 0;
let howMany = [];
howMany = clickButtonCheck();

function addElement(element, key, value) {

	const div = document.createElement('div');
	div.classList.add('wordsGrid');

	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.checked = 'checked';
	checkbox.id = 'type' + value;
	checkbox.classList.add('wordsCheckbox');

	const label = document.createElement('label');
	label.for = key;
	label.classList.add('wordsLabel');
	label.appendChild(checkbox);	
	
	checkbox.after(value)
	
	div.appendChild(label);
	element.appendChild(div);

	return {
		div: div,
		checkbox: checkbox,
		label: label,
	};
}

function setCheckboxes(words) {

	let checkboxes = [{
		key: 'one',
		value: 'One',
	}, {
		key: 'two',
		value: 'Two',
	}, {
		key: 'three',
		value: 'Three',
	}, {
		key: 'four',
		value: 'Four',
	}, {
		key: 'five',
		value: 'Five',
	}, {
		key: 'six',
		value: 'Six',
	}, {
		key: 'seven',
		value: 'Seven',
	}, {
		key: 'eight',
		value: 'Eight',
	}, {
		key: 'nine',
		value: 'Nine',
	}, {
		key: 'ten',
		value: 'Ten',
	}, {
		key: 'eleven',
		value: 'Eleven',
	}, {
		key: 'twelve',
		value: 'Twelve',
	}, {
		key: 'thirteen',
		value: 'Thirteen',
	}, {
		key: 'fourteen',
		value: 'Fourteen',
	}];

	let elements = [];
	for (let i=0; i<checkboxes.length; i++) {
		elements.push(Object.assign(checkboxes[i],
			addElement(words, checkboxes[i].key, checkboxes[i].value)));
	}

	return elements;
}

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

function clickButtonPrevious() {
	setStorage();
	if (previousOrNext <= 0) {
		previousOrNext = howMany.length;
	}
	previousOrNext--;
    readonly.value = show
        ? howMany[previousOrNext].id
        : howMany[previousOrNext].missing;
	text.value = '';
}

function clickButtonPlay() {
	speak(howMany[previousOrNext].id);
}

function clickButtonShow() {
	show = !show;
	readonly.value = show
		? howMany[previousOrNext].id
		: howMany[previousOrNext].missing;
}

function clickButtonNext() {
	setStorage();
	if (previousOrNext >= howMany.length - 1) {
		previousOrNext = -1;
	}
	previousOrNext++;
    readonly.value = show
        ? howMany[previousOrNext].id
        : howMany[previousOrNext].missing;
	text.value = '';
}

function clickButtonCheck() {

	label.innerHTML = 'Number: ' + number.value;

	let myNumber = Number(number.value);

	let myPreviousOrNext = 0;
	let myHowMany = [];

	for (let i=0; i<allWords.length; i++) {

		if (checkboxes[i].checkbox.checked) {

			let a = [];
			for (let j=0; j<allWords[i].length; j++) {
				
				let myWords = allWords[i][j];
				let myMissing = myWords;

				if (myNumber >= myWords.length) {
					myMissing = ''
					for (let l=0; l<myWords.length; l++) {
						myMissing += '-';
					}
				}
				else if (myNumber < myWords.length) {
					let n = [];
					for (let l=0; l<myMissing.length; l++) {
						n.push(l);
					}
					n = shuffle(n);
					for (let l=0; l<myNumber; l++) {
						myMissing = myMissing.slice(0, n[l]) + '-' + myMissing.slice(n[l]+1);
					}
				}

				a.push({
					'id': myWords,
					'missing': myMissing,
				});
			}

			myHowMany = myHowMany.concat(a);
		}
	}
	myHowMany = shuffle(myHowMany);
	
	readonly.value = show
	    ? myHowMany[myPreviousOrNext].id
	    : myHowMany[myPreviousOrNext].missing;
	text.value = '';

	previousOrNext = myPreviousOrNext;
	howMany = myHowMany;
	return howMany;
}

function clickButtonMode() {
	let element = document.body;
	element.classList.toggle('darkModeButton');
	readonly.classList.toggle('darkModeButton');
	text.classList.toggle('darkModeButton');
}

sessionStorage.clear();
sessionStorage.setItem('key', '');
let data = sessionStorage.getItem('key');

let now = formatDate()

function formatDate() {

    const date = new Date();

    let month = (date.getMonth()+1).toString();
    let day   = date.getDate().toString();
    let year  = date.getFullYear().toString();
    let hour  = date.getHours().toString();
    let min   = date.getMinutes().toString();
    let sec   = date.getSeconds().toString();

    let time = [month, day, hour, min, sec];
    for (let i=0; i<time.length; i++) {
    	if (time[i].length < 2) {
    		time[i] = '0' + time[i]
    	}
    }

    return [year, time[0], time[1], time[2] + time[3] + time[4]].join('-');
}

function setStorage() {
	if (text.value !== '') {
		data += howMany[previousOrNext].id + ','
			+ text.value + ','
			+ howMany[previousOrNext].missing + '\n';
		sessionStorage.setItem('key', data);
	}
	return data;
}

async function clickButtonSave() {
 
	let src = data;
	if (text.value !== '') { 
		src += howMany[previousOrNext].id + ','
			+ text.value + ','
			+ howMany[previousOrNext].missing + '\n';
	}

	let txtBlob = new Blob([src], {type: 'text/plain'});
  
	const pickerOptions = {
		suggestedName: `${now.toLowerCase()}.txt`,
		types: [{
			description: 'Simple Text File',
			accept: { 'text/plain': ['.txt'], },
		}],
	};

	try {
		const fileHandle = await window.showSaveFilePicker(pickerOptions);
		const writableFileStream = await fileHandle.createWritable();
		await writableFileStream.write(txtBlob);
		await writableFileStream.close();
	}
	catch (error) {
		console.log(error);
	}
}
