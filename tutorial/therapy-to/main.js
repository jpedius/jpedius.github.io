"use strict";

let my_items = document.getElementById("items");

let my_array = [
	"Take Dally Elevators to Floor 2",
	"Right into Garden Walkway",
	"Left at the end to Meadow Pavilion",
	"Follow signs to Meadow Elevators",
	"Take Meadow Elevators down to Floor A",
	"Turn left off of the elevators",
	"Follow signs to room number or Rehab Unit Nurse Station",
];

function fn_array() {

	let arr = [];
	for (let i=0; i<my_array.length; i++) {
    	arr.push(fn_element(my_items, my_array[i]));
	}
}

function fn_element(items, element) {

    let div = document.createElement("div");
    div.classList.add("myDiv");

    let play = document.createElement("button");
    play.classList.add("myButton");
    play.innerHTML = "Play";
    play.addEventListener("click", () => {
    	my_speak(element);
    });

    let span = document.createElement("span");
    span.classList.add("mySpan");
    span.innerHTML = element;

    div.appendChild(play);
    div.appendChild(span);
    items.appendChild(div);
}

fn_array();
