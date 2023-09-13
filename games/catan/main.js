'use strict';

const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const selectEl = favDialog.querySelector("select");
const confirmBtn = favDialog.querySelector("#confirmBtn");

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
	console.log(favDialog);
  favDialog.showModal();
	console.log(favDialog);
});

// "Favorite animal" input sets the value of the submit button
selectEl.addEventListener("change", (e) => {
	console.log(confirmBtn.value);
  confirmBtn.value = selectEl.value + ' Selection';
	console.log(confirmBtn.value);
});

// "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
favDialog.addEventListener("close", (e) => {
	console.log(outputBox.value);
  outputBox.value =
    favDialog.returnValue === "default"
      ? "No return value."
      : `ReturnValue: ${favDialog.returnValue}.`; // Have to check for "default" rather than empty string
	console.log(outputBox.value);
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
	console.log(favDialog);
  event.preventDefault(); // We don't want to submit this fake form
  favDialog.close(selectEl.value); // Have to send the select box value here.
	console.log(favDialog);
});
