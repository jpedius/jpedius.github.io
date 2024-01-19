'use strict';

let my_copy = document.getElementById('my_copy');
let my_text = '';

function my_play_button() {
    my_text = (my_copy.value).trim();
    if (my_text !== '') {
        speak(my_text);
    }
}

function my_wipe_button() {
    my_copy.value = '';
}
