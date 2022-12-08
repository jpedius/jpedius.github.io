'use strict';

(function($) {

    let title = 'Whole Sentences';
    document.title = title;

    let root = document.querySelector('#root');

    let h1 = document.createElement('h1');
    h1.innerHTML = title;
    root.appendChild(h1);
    
    let div01 = document.createElement('div');
    
    let previous = document.createElement('button');
    previous.innerHTML = 'Previous';
    div01.appendChild(previous);
    
    let play = document.createElement('button');
    play.innerHTML = 'Play';
    div01.appendChild(play);
    
    let next = document.createElement('button');
    next.innerHTML = 'Next';
    div01.appendChild(next);

    root.appendChild(div01);
        
    let forRate = document.createElement('label');
    forRate.htmlFor = 'rate';
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
    forPitch.htmlFor = 'pitch';
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
    console.log(rate.value, pitch.value);

})(jQuery);
