"use strict";

// === №139.1 ===

console.log('');
console.log('// === №139.1 ===');

function getLastDay(month, year) { // функция должна принимать и год
    let lastDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (month != 1) {
        return lastDays[month]; // если не февраль
    } else {
        if (leapYear(year)) {
            return 29;
        } else {
            return 28;
        }
    }
}

function leapYear(year) {
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        return true;
    }
    return false;
}

console.log(getLastDay(1, 2076));

// === №139.2 ===

console.log('');
console.log('// === №139.2 ===');

function getLastDay2(month, year) {
    return new Date(year, month + 1, 0).getDate();
}
console.log(getLastDay2(1, 2021));

// === №139.3 ===

console.log('');
console.log('// === №139.3 ===');

let arrDayOfWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

function getDayOfWeekLastDayMonth(month, year) {
    return new Date(year, month + 1, 0).getDay();
}

console.log(arrDayOfWeek[getDayOfWeekLastDayMonth(4, 2021) - 1]);

// === №139.4 ===

console.log('');
console.log('// === №139.4 ===');

function isLeap(year) {
    return new Date(year, 2, 0).getDate() == 29;
}

console.log(isLeap(2021));