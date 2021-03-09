"use strict";

// === №142.1 ===

console.log('');
console.log('// === №142.1 ===');

let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
console.log((now - date) / 1000);

// === №142.2 ===

console.log('');
console.log('// === №142.2 ===');

date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
console.log((date - now) / 1000);

// === №142.3 ===

console.log('');
console.log('// === №142.3 ===');

date = new Date(now.getFullYear() + 1, 0, 1);
let diffInDay = (date - new Date(now.getFullYear(), now.getMonth(), now.getDate())) / 86400000;

console.log(diffInDay);

// === №142.4 ===

console.log('');
console.log('// === №142.4 ===');

let count = 0;
for (let month = 0; month <= 11; month++) {
    date = new Date(now.getFullYear(), month, 13);
    if (date.getDay() == 5) {
        count++;
    }
}

console.log(count);

// === №142.5 ===

console.log('');
console.log('// === №142.5 ===');

let oldDate = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());

console.log(oldDate.getFullYear());

// === №142.6 ===

console.log('');
console.log('// === №142.6 ===');

let arrDayOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
let newDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);

console.log(arrDayOfWeek[newDate.getDay()]);

// === №142.7 ===

console.log('');
console.log('// === №142.7 ===');

let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
newDate = new Date(now.getFullYear() + 1, 0);
diffInDay = (newDate - today) / 86400000;

console.log(diffInDay);

// === №142.8 ===

console.log('');
console.log('// === №142.8 ===');

function isLeap8(year) {
    if (new Date(year, 2, 0).getDate() == 29) {
        return 'Указанный год високосный';
    } else {
        return 'Указанный год НЕ високосный';
    }
}

console.log(isLeap8(now.getFullYear()));

// === №142.9 ===

console.log('');
console.log('// === №142.9 ===');

for (let year = now.getFullYear() - 1; year > now.getFullYear() - 8; year--) {
    if (isLeap9(year)) {
        console.log(year);
        break;
    }
}

function isLeap9(year) {
    return new Date(year, 2, 0).getDate() == 29
}

// === №142.10 ===

console.log('');
console.log('// === №142.10 ===');

for (let year = now.getFullYear() + 1; year < now.getFullYear() + 8; year++) {
    if (isLeap9(year)) {
        console.log(year);
        break;
    }
}