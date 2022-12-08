'use strict';

import { voice } from "/tutorial/whole-sentences/speech.js";

(function($) {

    let title = 'Whole Sentences';
    document.title = title;

    let root = document.querySelector('#root');

    let h1 = document.createElement('h1');
    h1.innerHTML = title;
    root.appendChild(h1);
    
    let divButton = document.createElement('div');
    
    let previous = document.createElement('button');
    previous.innerHTML = 'Previous';
    divButton.appendChild(previous);
    
    let play = document.createElement('button');
    play.innerHTML = 'Play';
    divButton.appendChild(play);
    
    let next = document.createElement('button');
    next.innerHTML = 'Next';
    divButton.appendChild(next);

    root.appendChild(divButton);
        
    let divRatePitch = document.createElement('div');
    
    let spanRate = document.createElement('span');
    
    let forRate = document.createElement('label');
    forRate.htmlFor = 'rate';
    forRate.innerHTML = 'Rate';
    spanRate.appendChild(forRate);
    
    let rate = document.createElement('input');
    rate.type = 'range';
    rate.min = 0.5;
    rate.max = 2;
    rate.defaultValue = '1';
    rate.step = 0.1;
    spanRate.appendChild(rate);
    
    divRatePitch.appendChild(spanRate);
    
    let spanPitch = document.createElement('span');
    
    let forPitch = document.createElement('label');
    forPitch.htmlFor = 'pitch';
    forPitch.innerHTML = 'Pitch';
    spanPitch.appendChild(forPitch);
    
    let pitch = document.createElement('input');
    pitch.type = 'range';
    pitch.min = 0;
    pitch.max = 2;
    pitch.defaultValue = '1';
    pitch.step = 0.1;
    spanPitch.appendChild(pitch);
    
    divRatePitch.appendChild(spanPitch); 
    
    root.appendChild(divRatePitch);
    
    let divVoice = document.createElement('div');

    divVoice.appendChild(voice);
    
    root.appendChild(divVoice);
   
    console.log(title, root, h1, previous, next, play);
    console.log(forRate, rate, forPitch, pitch, voice);

})(jQuery);
