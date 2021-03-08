"use strict";

// === №136.1 ===

console.log('');
console.log('// === №136.1 ===');

let date = new Date(2025, 0, 1)
console.log(date.getTime());

// === №136.2 ===

console.log('');
console.log('// === №136.2 ===');

let delta = new Date(2000, 0, 10).getTime() - new Date(1988, 2, 1).getTime();
console.log(delta / 86400000);

// === №136.3 ===

console.log('');
console.log('// === №136.3 ===');

let delta3 = new Date().getTime() - new Date(2000, 6, 7).getTime();

console.log(Math.round(delta3 / (86400000 * (365 / 12))));