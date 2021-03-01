"use strict";

// === №125.1 ===

console.log('');
console.log('// === №125.1 ===');

function average(...rest) {

    let sum = rest.reduce((total, currentValue) => total + currentValue)

    return sum / rest.length;
}

console.log(average(1, 2, 3, 4, 5));

// === №125.2 ===

console.log('');
console.log('// === №125.2 ===');

let result = unite([1, 2, 3], [4, 5, 6], [7, 8, 9]);
console.log(result);

function unite(arr1, arr2, arr3) {
    return [arr1, arr2, arr3];
}

// === №125.3 ===

console.log('');
console.log('// === №125.3 ===');

let result3 = merge([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]);
console.log(result3);

function merge(arr) {
    let result = [];

    for (let elem of arr) {
        if (typeof elem == 'object') {
            result = result.concat(merge(elem));
        } else result = result.concat(elem);

    }

    return result;
}