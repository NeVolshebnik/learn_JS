"use strict";

// === №141.1 ===

console.log('');
console.log('// === №141.1 ===');

let arrDayOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
let now = new Date();
let dayOfWeek = new Date(now.getFullYear(), 11, 31).getDay();
console.log(arrDayOfWeek[dayOfWeek]);

// === №141.2 ===

console.log('');
console.log('// === №141.2 ===');

dayOfWeek = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
console.log(arrDayOfWeek[dayOfWeek]);

// === №141.3 ===

console.log('');
console.log('// === №141.3 ===');

dayOfWeek = new Date(now.getFullYear() + 1, 11, 31).getDay();
console.log(arrDayOfWeek[dayOfWeek]);

// === №141.4 ===

console.log('');
console.log('// === №141.4 ===');

dayOfWeek = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate()).getDay();
console.log(arrDayOfWeek[dayOfWeek]);

// === №141.5 ===

console.log('');
console.log('// === №141.5 ===');

dayOfWeek = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate()).getDay();
console.log(arrDayOfWeek[dayOfWeek]);

// === №141.6 ===

console.log('');
console.log('// === №141.6 ===');

// Покажет последний месяц предыдущего года
console.log(new Date(2020, -1, 10));

// === №141.7 ===

console.log('');
console.log('// === №141.7 ===');

dayOfWeek = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate()).getDay();
console.log(arrDayOfWeek[dayOfWeek]);

// === №141.8 ===

console.log('');
console.log('// === №141.8 ===');

let date1 = new Date(now.getFullYear(), 0, 1);
let date2 = new Date(now.getFullYear(), 8, 10);

let diffInDay = (date2 - date1) / 86400000;

console.log(diffInDay);

// === №141.9 ===

console.log('');
console.log('// === №141.9 ===');

date1 = new Date(now.getFullYear(), now.getMonth() + 1, 10);
date2 = new Date(now.getFullYear(), now.getMonth(), 20);

diffInDay = (date1 - date2) / 86400000;

console.log(diffInDay);

// === №141.10 ===

console.log('');
console.log('// === №141.10 ===');

date1 = new Date();
date2 = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12)

let diffInHours = (date1 - date2) / 3600000;

console.log(Math.floor(diffInHours) + ' полных часа.');

// === №141.11 ===

console.log('');
console.log('// === №141.11 ===');

date1 = new Date();
date2 = new Date(now.getFullYear(), now.getMonth(), now.getDate());

diffInHours = (date1 - date2) / 3600000;

console.log(Math.floor(diffInHours) + ' полных часов.');

// === №141.12 ===

console.log('');
console.log('// === №141.12 ===');

date1 = new Date();
date2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);

diffInHours = (date2 - date1) / 3600000;

console.log(Math.floor(diffInHours) + ' полных часов.');

// === №141.13 ===

console.log('');
console.log('// === №141.13 ===');


let count = 0;
for (let year = 2000; year <= new Date().getFullYear(); year++) {
    dayOfWeek = new Date(year, 0, 1).getDay();
    if (dayOfWeek == 6 || dayOfWeek == 0) {
        count++;
    }
}

console.log(`С 2000г 1 января выпадало на выходной день ${count} раз`);