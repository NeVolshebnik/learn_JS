"use strict";

// === №116.1 ===

console.log('');
console.log('// === №116.1 ===');


let arr = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];

let result = arr.map(elem => Math.sqrt(elem));

console.log(result);

// === №116.2 ===

console.log('');
console.log('// === №116.2 ===');

let arr2 = ['a', 'b', 'c', 'd', 'e'];

let result2 = arr2.map(elem => elem + '!')

console.log(result2);

// === №116.3 ===

console.log('');
console.log('// === №116.3 ===');

let arr3 = ['one', 'two', 'three', 'four', 'five'];

let result3 = arr3.map(elem => elem.split('').reverse().join(''));

console.log(result3);

// === №116.4 ===

console.log('');
console.log('// === №116.4 ===');

let arr4 = ['123', '456', '789'];

let result4 = arr4.map(elem => elem.split(''));

console.log(result4);

// === №116.5 ===

console.log('');
console.log('// === №116.5 ===');

let arr5 = [1, 2, 3, 4, 5];

let result5 = arr5.map((elem, index) => elem * index);

console.log(result5);