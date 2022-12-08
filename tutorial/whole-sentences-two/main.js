'use strict';

(function($) {

    let title = 'Whole Sentences';
    document.title = title;

    let root = document.querySelector('#root');

    let h1 = document.createElement('h1');
    h1.innerHTML = title;
    root.appendChild(h1);
    
    let previous = document.createElement('button');
    previous.innerHTML = 'Previous';
    root.appendChild(previous);
    
    let next = document.createElement('button');
    next.innerHTML = 'Next';
    root.appendChild(next);
    
    let play = document.createElement('button');
    play.innerHTML = 'Play';
    root.appendChild(play);

    console.log(title, root, h1, previous, next, play);

})(jQuery);
