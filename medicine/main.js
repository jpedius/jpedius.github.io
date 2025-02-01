'use strict';

let medicine = fn_medicine();
medicine = fn_shuffle(medicine);

function fn_medicine_text(items, div) {

	let btn = document.createElement('button');
	btn.classList.add('myButton');
	btn.classList.add('myRight');
	btn.innerHTML = 'Name';
	btn.addEventListener('click', () => {
		let len = items.length;
		items.name = !items.name;
		div2.innerHTML = items.name
			? medicine[len].name
			: items.hidden;
	});

	let div1 = document.createElement('div');
	div1.classList.add('myGrid');
	div1.appendChild(btn);

	let div2 = document.createElement('div');
	div2.classList.add('myGrid');
	let len = items.length;
	div2.innerHTML = (medicine[len]).name

	div.appendChild(div1);
	div.appendChild(div2);

	return div2;
}

function fn_medicine_description(items, div) {

	let btn = document.createElement('button');
	btn.classList.add('myButton');
	btn.classList.add('myRight');
	btn.innerHTML = 'Description';
	btn.addEventListener('click', () => {
		let len = items.length;
		items.description = !items.description;
		div2.innerHTML = items.description
			? medicine[len].description
			: items.hidden;
	});

	let div1 = document.createElement('div');
	div1.classList.add('myGrid');
	div1.appendChild(btn);

	let div2 = document.createElement('div');
	div2.classList.add('myGrid');
	let len = items.length;
	div2.innerHTML = '----------';

	div.appendChild(div1);
	div.appendChild(div2);

	return div2;
}

function fn_medicine_image(items, div) {

	let btn = document.createElement('button');
	btn.classList.add('myButton');
	btn.classList.add('myRight');
	btn.innerHTML = 'Image';
	btn.addEventListener('click', () => {
		let len = items.length;
		items.image = !items.image;
		img.src = items.image
			? '/main/img/medicine/' + (medicine[len]).image
			: '/main/img/medicine/blank-black.jpg';
	});

	let div1 = document.createElement('div');
	div1.classList.add('myGrid');
	div1.appendChild(btn);

	let img = document.createElement('img');
	img.classList.add('myImage');
	let len = items.length;
	img.src = '/main/img/medicine/blank-black.jpg';

	let div2 = document.createElement('div');
	div2.classList.add('myGrid');
	div2.appendChild(img);

	div.appendChild(div1);
	div.appendChild(div2);

	return img;
}

function fn_medicine_button(items, div, ndi) {

	let div1 = document.createElement('div');
	div1.classList.add('myGrid');
	div1.innerHTML = '';

	let prev = document.createElement('button');
	prev.classList.add('myButtonItem');
	prev.innerHTML = 'Previous';
	prev.addEventListener('click', () => {
		let len = items.length;
		if (len <= 0) { len = medicine.length; }
		len--;
		items.length = len;
		fn_medicine_items(items, ndi);
	});

	let play = document.createElement('button');
	play.classList.add('myButtonItem');
	play.innerHTML = 'Play';
	play.addEventListener('click', () => {
		let len = items.length;
		fn_speak((medicine[len]).name);
	});

	let next = document.createElement('button');
	next.classList.add('myButtonItem');
	next.innerHTML = 'Next';
	next.addEventListener('click', () => {
		let len = items.length;
		if (len >= medicine.length - 1) { len = -1; }
		len++;
		items.length = len;
		fn_medicine_items(items, ndi);
	});

	let div2 = document.createElement('div');
	div2.classList.add('myGrid');
	div2.appendChild(prev);
	div2.appendChild(play);
	div2.appendChild(next);

	div.appendChild(div1);
	div.appendChild(div2);
}

function fn_medicine_items(items, ndi) {

	let len = items.length;

	ndi.name.innerHTML = items.name
		? medicine[len].name
		: items.hidden;

	ndi.description.innerHTML = items.description
		? medicine[len].description
		: items.hidden;

	ndi.image.src = items.image
		? '/main/img/medicine/' + (medicine[len]).image
		: '/main/img/medicine/blank-black.jpg';
}

function fn_container(items) {

	let element = document.getElementById('idMedicine');

	let div = document.createElement('div');
	div.classList.add('myContainer');

	let name = fn_medicine_text(items, div);
	let description = fn_medicine_description(items, div);
	let image = fn_medicine_image(items, div);
	
	fn_medicine_button(items, div, {
		name: name,
		description: description,
		image: image,
	});

	element.appendChild(div);
}
fn_container({
	length: 0,
	name: true,
	description: false,
	image: false,
	hidden: '----------',
});
