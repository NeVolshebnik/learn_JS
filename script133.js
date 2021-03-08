"use strict";

// === №133.1 ===

console.log('');
console.log('// === №133.1 ===');

let day = new Date().getDay()

console.log(`Номер текущего дня недели - ${day}`);

// === №133.2 ===

console.log('');
console.log('// === №133.2 ===');

function getStatusDayOfWeek(num) {
    if (num <= 5) {
        return 'рабочий';
    } else {
        return 'выходной';
    }
}

console.log(`Сегодня ${getStatusDayOfWeek(day)} день`);

// === №133.3 ===

console.log('');
console.log('// === №133.3 ===');

console.log(`До ближайшего воскресенья осталось ${7 - day} дней`);