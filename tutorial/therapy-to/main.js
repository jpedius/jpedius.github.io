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




/*



let my_play = [
	"Take Meadow Elevators up to Floor 2R - Patient Access",
	"Turn right at the seating area into Garden Walkway",
	"Take Dally Elevators to Floor 3",
	"Proceed to Main Lobby and Valet Parking",
];

function fn_main() {

}

function fn_play(element, item) {

    let div = document.createElement("div");
    div.classList.add("myDiv");

    let play = document.createElement("button");
    play.classList.add("myButton");
    play.innerHTML = "Play";
    play.addEventListener("click", () => {


    });

    let span = document.createElement("span");
    span.classList.add("mySpan");
    span.innerHTML = item;

    div.appendChild(play);
    div.appendChild(span);
    element.appendChild(div);
}


let my_options = [
	"To Therapy",
	"From Therapy",
];
let my_item = 0;

let my_play = [
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
];

function fn_options() {
    my_kind.innerHTML = "";
    for (let i = 0; i < my_options.length; i++) {
        const option = document.createElement("option");
        option.textContent = `${my_options[i]}`;
        my_kind.appendChild(option);
    }
}
fn_options();

function fn_kind() {
    my_item = my_kind.options.selectedIndex;
}
fn_kind();

function fn_button(element) {

    let div = document.createElement("div");
    div.classList.add("myDiv");

    let play = document.createElement("button");
    play.classList.add("myButton");
    play.innerHTML = "Play";
    play.addEventListener("click", () => {


    });

    div.appendChild(play);

    element.appendChild(div);

    return element;
}

function fn_play(num) {

	let play = num;
	if (my_item !== 0) {
		play = (my_play.length - 1) - num;
	}

	console.log(num, my_options.length, play);
}

*/

