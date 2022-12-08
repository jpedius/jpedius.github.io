let title = 'Whole Sentences';
document.title = title;

let root = document.querySelector('#root');

let h1 = document.createElement('h1');
h1.innerHTML = title;
root.appendChild(h1);

console.log(title, root, h1);
