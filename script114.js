"use strict";

// === №114.1 ===


function func(prevPrevNum, prevNum) {
    console.log(prevPrevNum);

    prevNum = prevPrevNum + prevNum;
    prevPrevNum = prevNum - prevPrevNum;
    i++;

    if (i < 10) {
        func(prevPrevNum, prevNum);
    }

}
let i = 0;
console.log('=== №114.1 ===');
func(1, 2); // вызываем функцию с первыми двумя числами

// === №114.2 ===

function func1(prevPrevNum, prevNum) {
    arr.push(prevPrevNum);

    prevNum = prevPrevNum + prevNum;
    prevPrevNum = prevNum - prevPrevNum

    if (arr.length < 10) {
        func1(prevPrevNum, prevNum);
    }
    return arr;
}

let arr = [];
console.log('=== №114.2 ===');
console.log(func1(1, 2)); // выведет массив чисел