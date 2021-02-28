"use strict";

// === №119.1 ===

console.log('');
console.log('// === №119.1 ===');

let arr = [1, 2, 3, 4, 5];

let result = arr.every(elem => elem > 0);

console.log(result);

// === №119.2 ===

console.log('');
console.log('// === №119.2 ===');

let check = (elem, index) => elem * index < 30;

let result2 = arr.every(check);

console.log(result2);