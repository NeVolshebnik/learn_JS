// === №118.1 ===

console.log('');
console.log('// === №118.1 ===');

let arr = [1, 2, -3, 4, 5, -6, -7, 8, -9, -10]

let result1 = arr.filter(elem => elem > 0);

console.log(result1);

// === №118.2 ===

console.log('');
console.log('// === №118.2 ===');

let result2 = arr.filter(elem => elem < 0);

console.log(result2);

// === №118.3 ===

console.log('');
console.log('// === №118.3 ===');

let arr3 = [-5, -1, 0, 2, 6, 7, 9, 10, 14, 18, 21];

let result3 = arr3.filter(elem => (elem > 0 && elem < 10));

console.log(result3);

// === №118.4 ===

console.log('');
console.log('// === №118.4 ===');

let arr4 = ['окно', 'монитор', 'снег', 'карандаш', 'праздник', 'лампа', 'колесо'];

let result4 = arr4.filter(elem => elem.length > 5);

console.log(result4);

// === №118.5 ===

console.log('');
console.log('// === №118.5 ===');

let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result5 = arr5.filter((elem, index) => elem * index < 30);

console.log(result5);

// === №118.6 ===

console.log('');
console.log('// === №118.6 ===');

let arr6 = [1, 2, [3, 4], 5, [6, 7]];
let getPrimitive = elem => typeof elem != 'object';

console.log(arr6.filter(getPrimitive));