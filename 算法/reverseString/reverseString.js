"use strict";
function reverseString(str) {
    return str.split(' ').map(char => {
        return char.split('').reverse().join(' ');
    }).join(' ');
}
