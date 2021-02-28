"use strict";

// === №121.1 ===

console.log('');
console.log('// === №121.1 ===');

let arr = [1, 2, 3, 4, 5];

function func(num1, num2, num3, num4, num5) {
    return num1 + num2 + num3 + num4 + num5;
}

console.log(func(...arr));

// === №121.3 ===

console.log('');
console.log('// === №121.3 ===');

let arr3 = [1, 3, 5, 7, 9];

let result = Math.max(...arr3)

console.log(result);