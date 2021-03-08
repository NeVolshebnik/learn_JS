"use strict";

// === №141.1 ===

console.log('');
console.log('// === №141.1 ===');

let arrDayOfWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let now = new Date();
let dayOfWeek = new Date(now.getFullYear(), 11, 31).getDay();
console.log(arrDayOfWeek[dayOfWeek - 1]);

// === №141.2 ===

console.log('');
console.log('// === №141.2 ===');

dayOfWeek = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
console.log(arrDayOfWeek[dayOfWeek - 1]);

// === №141.3 ===

console.log('');
console.log('// === №141.3 ===');

dayOfWeek = new Date(now.getFullYear() + 1, 11, 31).getDay();
console.log(arrDayOfWeek[dayOfWeek - 1]);

// === №141.4 ===

console.log('');
console.log('// === №141.4 ===');

dayOfWeek = new Date(now.getFullYear() + 1, now.getMonth(), now.getDay()).getDay();
console.log(arrDayOfWeek[dayOfWeek - 1]);