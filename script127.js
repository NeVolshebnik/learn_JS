"use strict";

// === №127.1 ===

console.log('');
console.log('// === №127.1 ===');

let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4, 5];
let arr3 = [2, 4, 6, 7];

function getDiff(...arrs) {
    let result = [];

    for (let i = 0; i < arrs.length; i++) {
        let arr = arrs.splice(i, 1);
        arr = arr[0];

        for (let elem of arr) {
            if (!inArrays(elem, arrs)) {
                result.push(elem);
            }
        }
        arrs.splice(i, 0, arr);
    }

    return result;

    function inArray(elem, arr) {
        return arr.indexOf(elem) != -1;
    }

    function inArrays(elem, arrs) {
        for (let arr1 of arrs) {
            if (inArray(elem, arr1)) {
                return true;
            }
        }
        return false;
    }
}

console.log(getDiff(arr1, arr2, arr3));