const form = document.querySelector("form");

form.onsubmit = function (event) {
  console.log('Q: six');
  event.preventDefault();
};
