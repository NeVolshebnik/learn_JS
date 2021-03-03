"use strict";

// === №128.1 ===

console.log('');
console.log('// === №128.1 ===');

let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
let [name, surname, department, position, salary] = arr;

// === №128.2 ===

console.log('');
console.log('// === №128.2 ===');

function func() {
    return ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
}

let [name2, surname2, department2, position2, salary2] = func();

// === №128.3 ===

console.log('');
console.log('// === №128.3 ===');

let arr3 = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

//let department = arr[2];
//let position   = arr[3];

let [, , department3, position3] = arr3;

// === №128.4 ===

console.log('');
console.log('// === №128.4 ===');

let arr4 = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

//let name4 = arr4[0];
//let surname4 = arr4[1];

//let info = arr4.slice(2); // все элементы со второго до конца массива

let [name4, surname4, ...info] = arr4;

// === №128.5 ===

console.log('');
console.log('// === №128.5 ===');

let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист'];

let name = arr[0];
let surname = arr[1];
let department = arr[2];

let position;
if (arr[3] !== undefined) {
    position = arr[3];
} else {
    position = 'джуниор';
}