'use strict';

function fn_tabs(evt, tab) {

	// Declare all variables
	let tabcontent, tablinks;

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName('tabcontent');
	for (let i=0; i<tabcontent.length; i++) {
		tabcontent[i].style.display = 'none';
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName('tablinks');
	for (let i=0; i<tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(' active', '');
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tab).style.display = 'block';
	evt.currentTarget.className += ' active';
}

function fn_selected_tab(index) {

	let tabcontent, tablinks;

	tabcontent = document.getElementsByClassName('tabcontent');
	tablinks = document.getElementsByClassName('tablinks');

	tabcontent[index].classList.add('active');
	tabcontent[index].style.display = 'block';
	tablinks[index].classList.add('active');
}

fn_selected_tab(0);

function fn_mode() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}
