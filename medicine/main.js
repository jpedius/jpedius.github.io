'use strict';

function fn_container_text(items, div) {

	let btn = document.createElement('button');
	btn.classList.add('myButton');
	btn.innerHTML = 'Name';
	btn.addEventListener('click', () => {
		items.name = !items.name;
		div2.innerHTML = items.name
			? items.medicine[items.length].name
			: items.hidden;
	});

	let div1 = document.createElement('div');
	div1.classList.add('myGrid');
	div1.appendChild(btn);

	let div2 = document.createElement('div');
	div2.classList.add('myGrid');
	div2.innerHTML = items.medicine[items.length].name

	div.appendChild(div1);
	div.appendChild(div2);

	return div2;
}

function fn_container_description(items, div) {

	let btn = document.createElement('button');
	btn.classList.add('myButton');
	btn.innerHTML = 'Description';
	btn.addEventListener('click', () => {
		items.description = !items.description;
		div2.innerHTML = items.description
			? items.medicine[items.length].description
			: items.hidden;
	});

	let div1 = document.createElement('div');
	div1.classList.add('myGrid');
	div1.appendChild(btn);

	let div2 = document.createElement('div');
	div2.classList.add('myGrid');
	div2.innerHTML = '----------';

	div.appendChild(div1);
	div.appendChild(div2);

	return div2;
}

function fn_container_image(items, div) {

	let btn = document.createElement('button');
	btn.classList.add('myButton');
	btn.innerHTML = 'Image';
	btn.addEventListener('click', () => {
		items.image = !items.image;
		img.src = items.image
			? '/main/img/medicine/' + items.medicine[items.length].image
			: '/main/img/medicine/blank-black.jpg';
	});

	let div1 = document.createElement('div');
	div1.classList.add('myGrid');
	div1.appendChild(btn);

	let img = document.createElement('img');
	img.classList.add('myImage');
	img.src = '/main/img/medicine/blank-black.jpg';

	let div2 = document.createElement('div');
	div2.classList.add('myGrid');
	div2.appendChild(img);

	div.appendChild(div1);
	div.appendChild(div2);

	return img;
}

function fn_container_button(items, div, array) {

	let div1 = document.createElement('div');
	div1.classList.add('myGrid');
	div1.innerHTML = '';

	let prev = document.createElement('button');
	prev.classList.add('myButtonItem');
	prev.innerHTML = 'Previous';
	prev.addEventListener('click', () => {
		if (items.length <= 0) {
			items.length = items.medicine.length;
		}
		items.length--;
		fn_container_array(items, array);
	});

	let play = document.createElement('button');
	play.classList.add('myButtonItem');
	play.innerHTML = 'Play';
	play.addEventListener('click', () => {
		fn_speak(items.medicine[items.length].name);
	});

	let next = document.createElement('button');
	next.classList.add('myButtonItem');
	next.innerHTML = 'Next';
	next.addEventListener('click', () => {
		if (items.length >= items.medicine.length - 1) {
			items.length = -1;
		}
		items.length++;
		fn_container_array(items, array);
	});

	let div2 = document.createElement('div');
	div2.classList.add('myGrid');
	div2.appendChild(prev);
	div2.appendChild(play);
	div2.appendChild(next);

	div.appendChild(div1);
	div.appendChild(div2);
}

function fn_container_array(items, array) {

	array.name.innerHTML = items.name
		? items.medicine[items.length].name
		: items.hidden;

	array.description.innerHTML = items.description
		? items.medicine[items.length].description
		: items.hidden;

	array.image.src = items.image
		? '/main/img/medicine/' + items.medicine[items.length].image
		: '/main/img/medicine/blank-black.jpg';
}

function fn_container(items) {

	let element = document.getElementById('idMain');

	let div = document.createElement('div');
	div.classList.add('myContainer');

	let name = fn_container_text(items, div);
	let description = fn_container_description(items, div);
	let image = fn_container_image(items, div);
	
	fn_container_button(items, div, {
		name: name,
		description: description,
		image: image,
	});

	element.appendChild(div);
}

function fn_main() {

	let medicine = fn_medicine();
	medicine = fn_shuffle(medicine);

	fn_container({
		medicine: medicine,
		length: 0,
		name: true,
		description: false,
		image: false,
		hidden: '----------',
	});
}
fn_main();
