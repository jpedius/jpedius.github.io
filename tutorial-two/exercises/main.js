'use strict';

let exercises = [{
	name: 'Seated Hamstring Stretch',
	title: 'seated-hamstring-stretch',
	exercise: 'While seated rest your heel on the floor with your knee straight and gently lean forward until a stretch is felt behind your knee/thigh. Maintain a straight spine the entire time. Bend through your hips.',
}, {
	name: 'Supine Pirtformis Stretch',
    title: 'supine-pirtformis-stretch',
    exercise: 'Lie flat on your back with both knees bent. Take one leg and place ankle of opposite knee allowing the hip to open up and feel a stretch the butt.',
}, {
	name: 'Butterfly Stretch - Supine',
	title: 'butterfly-stretch-supine',
    exercise: 'Lie on your back with knees bent and place the bottom of your feet together. Next lower your knees to the side for a stretch to your inner thighs.',
}, {
	name: 'Trunk  Stretch Bilateral',
	title: 'trunk-stretch-bilateral',
    exercise: 'Start by lying on your back with your knees bent. Next, slowly allow your knees to drop to the one side as you rotate through your spine for a gentle stretch. Arms out at sides in “T” position.',
}, {
	name: 'Sidelying Clamshell - Clam Shell',
	title: 'sidelying-clamshell-clam-shell',
    exercise: 'While lying on your side with your knees bent raise your top knee upwards while keeping your feet in contact the entire time. Lower back down and repeat. Do not let your pelvis roll back during the lifting movement.',
}, {
	name: 'Figure Four Bridge',
	title: 'figure-four-bridge',
    exercise: 'Start lying on back with both legs bent, keep the affected leg bent, bring your left ankle on the right leg to rest on top of the knee. Press through the your heel and lift your butt off of the floor, keeping your stomach tight.',
}, {
	name: 'Heel Slides',
	title: 'heel-slides',
    exercise: 'While lying on your back with your knees bent slowly slide your heel forward on the floor/bed and then slide it back. Use your stomach muscle to keep your spine from moving.',
}];

let sentences = document.getElementById('sentences');
let text = document.getElementById('text');

let play = 0;
let howMany = exercises[play].exercise;

setSelectSentences();
clickSelectSentences();

function setSelectSentences() {
	sentences.innerHTML = '';
	for (let i = 0; i < exercises.length; i++) {
		const option = document.createElement('option');
		option.textContent = `${exercises[i].name}`;
		sentences.appendChild(option);
	}
}

function clickSelectSentences() {
	play = sentences.options.selectedIndex;
	howMany = exercises[play].exercise;
	text.value = howMany;
}

function clickButtonPlay() {
	speak(exercises[play].exercise);
}

function clickButtonMode() {
	let element = document.body;
	element.classList.toggle('darkModeButton');
}
