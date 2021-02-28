"use strict";

// === №120.1 ===

console.log('');
console.log('// === №120.1 ===');

let arr = [-1, -2, -3, -4, -5, -6, 7];

let result = arr.some(elem => elem > 0);

console.log(result);

// === №120.2 ===

console.log('');
console.log('// === №120.2 ===');

let result2 = arr.some((elem, index) => elem * index > 30);

console.log(result2);