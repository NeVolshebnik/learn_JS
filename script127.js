"use strict";

// === №127.1 ===

console.log('');
console.log('// === №127.1 ===');

//==========================================

let result = getInt([1, 2, 3], [2, 3, 4], [4, 3, 2]);
console.log(result); // выведет [2, 3]

function getInt(...arrs) {
    let result = [];
    let arr0 = arrs.shift();

    for (let elem of arr0) {
        if ( in inArrays(elem, arrs)) {
            result.push(elem);
        }
    }

    return result;

    function inArray(elem, arr) {
        return arr.indexOf(elem) != -1;
    }

    function inArrays(elem, arrs) {
        for (let arr of arrs) {
            if (inArray(elem, arr)) {

            }
        }
    }
}