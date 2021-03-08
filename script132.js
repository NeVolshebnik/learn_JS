"use strict";

// === №132.1 ===

console.log('');
console.log('// === №132.1 ===');

let date = new Date();
let formatDate = `${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())} ${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}.${date.getFullYear()}`;

console.log(formatDate);

function addZero(num) {
    if (num >= 0 && num < 10) {
        return '0' + num;
    }
    return num;
}

// === №132.2 ===

console.log('');
console.log('// === №132.2 ===');

let date2 = '2025-12-31';

let arr = date2.split('-').map(addZero);
date2 = arr.reverse().join('.');

console.log(date2);