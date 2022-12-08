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
    
    let forRate = document.createElement('label');
    forRate.for = 'rate';
    forRate.innerHTML = 'Rate';
    root.appendChild(forRate);
    
    let rate = document.createElement('input');
    rate.type = 'range';
    rate.min = 0.5;
    rate.max = 2;
    rate.value = '1';
    rate.step = 0.1;
    root.appendChild(rate);
    
    let forPitch = document.createElement('label');
    forPitch.for = 'pitch';
    forPitch.innerHTML = 'Pitch';
    root.appendChild(forPitch);
    
    let pitch = document.createElement('input');
    pitch.type = 'range';
    pitch.min = 0;
    pitch.max = 2;
    pitch.value = '1';
    pitch.step = 0.1;
    root.appendChild(pitch);
    
    let voice = document.createElement('select');
    root.appendChild(voice);
      
    console.log(title, root, h1, previous, next, play);
    console.log(forRate, rate, forPitch, pitch, voice);

})(jQuery);
