"use strict";

// === №130.1 ===

console.log('');
console.log('// === №130.1 ===');

function func([name, surname, department, position, salary]) {
    /*
    let name       = employee[0];
    let surname    = employee[1];
    let department = employee[2];
    let position   = employee[3];
    let salary     = employee[4];
    */
}

func(['Иван', 'Иванов', 'отдел разработки', 'программист', 2000]);

// === №130.2 ===

console.log('');
console.log('// === №130.2 ===');

function func2([name, surname, ...info]) {
    /*
     let name = employee[0];
     let surname = employee[1];
     let info = employee.slice(2);
     */
}

func2(['Иван', 'Иванов', 'отдел разработки', 'программист', 2000]);

// === №130.3 ===

console.log('');
console.log('// === №130.3 ===');

function func3([name, surname, department, position = 'джуниор']) {
    /*
let name       = employee[0];
let surname    = employee[1];
let department = employee[2];
	
let position;
if (arr[3] !== undefined) {
position = arr[3];
} else {
position = 'джуниор';
}
*/
}

func3(['Иван', 'Иванов', 'отдел разработки']);

// === №130.4 ===

console.log('');
console.log('// === №130.4 ===');

function func4(department, [name, surname], hired) {
    /*
let name     = employee[0];
let surname  = employee[1];
	
let year  = hired[0];
let month = hired[1];
let day   = hired[2];
*/
    hired = hired.split('-');
    let [year, month, day] = hired;
}

func4('отдел разработки', ['Иван', 'Иванов'], '2018-12-31');

// === №130.5 ===

console.log('');
console.log('// === №130.5 ===');