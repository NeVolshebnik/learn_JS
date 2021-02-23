"use strict";

// 113.1

let result = every([1, 2, 3, 4, 5], elem => elem > 0);
console.log(result);

function every(arr, callback) {
    for (elem of arr) {
        if (!callback(elem)) {
return false;
        }
    }

}