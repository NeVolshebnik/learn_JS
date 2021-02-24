"use strict";

// === №115.1 ===
console.log('// === №115.1 ===');

let obj = {
    a: 1,
    b: {
        c: 2,
        d: 3,
        e: 4
    },
    f: {
        g: 5,
        j: 6,
        k: {
            l: 7,
            m: {
                n: 8,
                o: 9
            }
        }
    }
};

function displayPrimitives(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'object') {
            displayPrimitives(obj[key])
        } else console.log(obj[key]);
    }
}

displayPrimitives(obj);

// === №115.2 ===
console.log('// === №115.2 ===');

function sumPrimitives(obj) {
    let result = 0

    for (let key in obj) {
        if (typeof obj[key] == 'object') {
            result += sumPrimitives(obj[key])
        } else {
            result += obj[key];
        }
    }

    return result;
}

console.log(sumPrimitives(obj));

// === №115.3 ===
console.log('// === №115.3 ===');

let arr = ['a', ['b', 'c', 'd'],
    ['e', 'f', ['g', ['j', 'k']]]
];

function convertArrayToString(arr) {
    let result = '';

    for (let elem of arr) {
        if (typeof elem == 'object') {
            result += convertArrayToString(elem);
        } else {
            result += elem;
        }
    }

    return result;
}

console.log(convertArrayToString(arr));

// === №115.4 ===
console.log('// === №115.4 ===');

let arr1 = [1, [2, 7, 8],
    [3, 4],
    [5, [6, 7]]
];