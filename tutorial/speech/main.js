'use strict';

let write = document.getElementById('write');

function my_play() {
    if ((write.value).trim() !== '') {
        my_speak(write.value);
    }
}

function my_wipe() {
    write.value = '';
}
