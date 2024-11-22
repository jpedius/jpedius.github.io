'use strict';

let myTitle = document.getElementById("my_title");
myTitle.innerHTML = document.title = "ARCS"; // Treatment Steps

let myVisualSupports = [
	{
		num: 1,
		name: "Read the entire passage 1 time aloud.",
		img: "1.png",
	}, {
		num: 2,
		name: "Read just 1 section aloud, knowing you are going to summarize it.",
		img: "2.png",
	}, {
		num: 3,
		// (optional) 
		name: "Re-read the section silently if you need to check your understanding.",
		img: "3.png",
	}, {
		num: 4,
		name: "Summarize the section aloud from memory, with meaningful words. (Follow Rules!)",
		img: "4.png",
	}, {
		num: 5,
		name: "One more time: Re-read the section aloud.",
		img: "2.png",
	}, {
		num: 6,
		name: "Now, let’s move to the next section.",
		img: "5.png",
	}, {
		num: null,
		name: "When all sections are done: Summarize the entire passage from memory. (Follow Rules!)",
		img: "4.png",
	},
];

let myRules = [
	{
		title: "As you summarize, do your best to intentionally follow these rules:",
		rules: [
			{
				num: "No pronouns. Use specific nouns.",
				not: "NOT: I, you, he, she, it, we, they me, him, her, us, and them",
			}, {
				num: "No non-specific words. Use specific words.",
				not: "NOT: thing, stuff, that",
			}, {
				num: "No opinions or unrelated words. Use just the facts.",
				not: "NOT: Well I think..... That makes me think of....",
			},
		],
	},
];

let myMain = document.getElementById("my_main");
for (let i=0; i<myVisualSupports.length; i++) {

    let div = document.createElement('div');
    div.classList.add('myDiv');

    // let play = document.createElement('button');
    // play.classList.add('myButton');
    // play.innerHTML = 'Play';
    // play.addEventListener('click', () => {
    // 	my_speak(myVisualSupports[i].name);
    //     //my_speak(my_exercises[i]);
    // });

    let img = document.createElement('img');
    img.classList.add('myImage');
    img.src = myVisualSupports[i].img;
    img.alt = myVisualSupports[i].name;
    //img.width = 100;
    img.addEventListener('click', () => {
    	my_speak(myVisualSupports[i].name);
        //my_speak(my_exercises[i]);
    });

    //div.appendChild(play);
    div.appendChild(img);

    //console.log(i, i.length, myVisualSupports[i].name);

    myMain.appendChild(div);
}
