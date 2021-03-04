"use strict";

// === №129.1 ===

console.log('');
console.log('// === №129.1 ===');

let options = {
    color: 'red',
    width: 400,
    height: 500,
};
/*
let color  = options.color;
let width  = options.width;
let height = options.height;
*/

let { color, width, height } = options;

// === №129.2 ===

console.log('');
console.log('// === №129.2 ===');

let options2 = {
    color2: 'red',
    width2: 400,
    height2: 500,
};
/*
let c = options.color;
let w = options.width;
let h = options.height;
*/

let { color2: c, width2: w, height2: h } = options2;

// === №129.3 ===

console.log('');
console.log('// === №129.3 ===');

let options3 = {
    width3: 400,
    height3: 500,
};
/*
let color;
if (options.color !== undefined) {
   color = options.color;
} else {
   color = 'black';
}

let width  = options.width;
let height = options.height;
*/

let { width3, height3, color3 = 'black' } = options3;

// === №129.4 ===

console.log('');
console.log('// === №129.4 ===');

let options4 = {
    width: 400,
    height: 500,
};
/*
let с;
if (options.с !== undefined) {
   с = options.color;
} else {
   с = 'black';
}

let w = options.width;
let h = options.height;
*/

let { color4: c4 = 'black', width4: w4, height4: h4 } = options4;