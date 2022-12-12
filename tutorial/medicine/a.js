/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Medicine</title>
  <link href="style.css" rel="stylesheet">
</head>
<body>
  <h1>Medicine</h1>
  <div id="root">
    <div class="text-a">
      <input type="text" class="txt" readonly autocomplete="off" autocorrect="off" autocapitalize="off">
    </div>
    <div class="text-a">
      <img width="250" height="250" class="txt2" autocomplete="off" autocorrect="off" autocapitalize="off">
    </div>
    <div class="text-a">
      <input type="text" class="txt3" readonly autocomplete="off" autocorrect="off" autocapitalize="off">
    </div>
    <div class="text-a">
      <button class="btn" onclick="previous()">Previous</button>
      <button class="btn" onclick="play()">Play</button>
      <button class="btn" onclick="next()">Next</button>
    </div>
    <div class="text-a">  
      <button class="btn" onclick="showWord()">Word</button>
      <button class="btn" onclick="showImage()">Image</button>
      <button class="btn" onclick="showDesc()">Desc</button>
    </div>
    <div class="text-a">
      <span>
        <label for="rate">Rate</label>
        <input type="range" min="0.5" max="2" value="1" step="0.1" id="rate">
      </span>
      <span>
        <label for="pitch">Pitch</label>
        <input type="range" min="0" max="2" value="1" step="0.1" id="pitch">
      </span>
    </div>
    <div class="text-a">
      <select id="voice"></select>
    </div>
  </div>
  <script type="text/javascript" src="../storage/medicine.js"></script>
  <script type="text/javascript" src="../storage/speech.js"></script> 
  <script type="text/javascript" src="main.js"></script>
</body>
</html>
*/
/*
.txt {
	font-size: 100px;
	border: none;
	outline: none;
}

.txt2 {
	font-size: 100px;
	border: none;
	outline: none;
}

.txt3 {
	font-size: 100px;
	border: none;
	outline: none;
	width: 100%;
}

.text-a {
	margin: 30px auto;
}

.btn {
	border: none;
	outline: none;
	background: #008;
	padding: 10px 30px;
	font-size: 20px;
	color: #eee;
	cursor: pointer;
	margin: 10px auto;			 
}

.btn:hover {
	background: #111;
}
*/
'use strict';

let previousOrNext = 0;
let howMany = read_sentences(words);
howMany = shuffle(howMany);

const textWord = document.querySelector(".txt");
textWord.value = howMany[previousOrNext].word;
let inputWord = false;

const textImage = document.querySelector(".txt2");
textImage.src = 'img/blank.jpg'; //howMany[previousOrNext].image;
let inputImage = true;

const textDesc = document.querySelector(".txt3");
textDesc.value = '-----'; //howMany[previousOrNext].description;
let inputDesc = true;

function setText() {

  if (inputWord === true) {
    textWord.value = '-----';
  }
  else {
    textWord.value = howMany[previousOrNext].word;
  }

  if (inputImage === true) {
    textImage.src = "img/blank.jpg";
  }
  else {
    textImage.src = howMany[previousOrNext].image;
  }

  if (inputDesc === true) {
    textDesc.value = '-----';
  }
  else {
    textDesc.value = howMany[previousOrNext].description;
  }

  return howMany[previousOrNext];
}

function showWord() {
  if (inputWord === false) {
    textWord.value = '-----';
    inputWord = true; 
  }
  else {
    textWord.value = howMany[previousOrNext].word;
    inputWord = false;
  }
}

function showImage() {
  if (inputImage === false) {
    textImage.src = "img/blank.jpg";
    inputImage = true; 
  }
  else {
    textImage.src = howMany[previousOrNext].image;
    inputImage = false;
  }
}

function showDesc() {
  if (inputDesc === false) {
    textDesc.value = '-----';
    inputDesc = true; 
  }
  else {
    textDesc.value = howMany[previousOrNext].description;
    inputDesc = false;
  }
}

function play() {
  speak(howMany[previousOrNext].word);
  textWord.blur();
}

function read_sentences(rs) {
  let items = [];
  for (const i of rs) {
    items.push(i);
  }
  return items;
};

function previous() {
  if (previousOrNext <= 0) {
    previousOrNext = howMany.length;
  }
  previousOrNext--;
  return setText();
}

function next() {
  if (previousOrNext >= howMany.length - 1) {
    previousOrNext = -1;
  }
  previousOrNext++;
  return setText();
}
