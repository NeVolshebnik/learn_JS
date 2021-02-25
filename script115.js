//"use strict";

// === №115.1 ===

console.log('');
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

console.log('');
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

console.log('');
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

// первый способ

console.log('');
console.log('// === №115.4 === первый способ');

let arr1 = [1, [2, 7, 8],
    [3, 4],
    [5, [6, 7]]
];

function getSquareArray1(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'object') {
            arr[i] = getSquareArray1(arr[i]);
            //  или так  
            //  arr.splice(i, 1, getSquareArray1(arr[i]));
        } else {
            arr[i] = arr[i] ** 2;
        }
    }
    return arr;
}

console.log(getSquareArray1(arr1));

// второй способ

console.log('');
console.log('// === №115.4 === второй способ');

let arr2 = [1, [2, 7, 8],
    [3, 4],
    [5, [6, 7]]
];

function getSquareArray2(arr) {
    let result = [];
    for (let elem of arr) {
        if (typeof elem == 'object') {
            result.push(getSquareArray2(elem));

        } else {
            result.push(elem ** 2)
            let a = 0;
        }
    }
    return result;
}

console.log(getSquareArray2(arr2));

// === №115.5 ===

console.log('');
console.log('// === №115.5 ===');

let arr3 = [1, [2, 7, 8],
    [3, 4, [5, [6, 7]]]
];

function getArrayOfPrimitives(arr) {
    let result = [];

    for (let elem of arr) {
        if (typeof elem == 'object') {
            result = result.concat(getArrayOfPrimitives(elem));
        } else {
            result.push(elem);
        }
    }
    return result;
}

console.log(getArrayOfPrimitives(arr3));

// === №115.6 ===

console.log('');
console.log('// === №115.6 ===');

let arr4 = [1, [2, 7, 8],
    [3, 4],
    [5, [6, 7]]
];

function getElemWithPrimitives(arr) {
    let result = [];
    for (let elem of arr) {
        if (typeof elem == 'object') {
            result = [];
            getElemWithPrimitives(elem);
        } else {
            result.push(elem);
        }
    }
    if (result.length != 0) {
        console.log(result);
    }

}

getElemWithPrimitives(arr4);

// === №115.7 ===

console.log('');
console.log('// === №115.7 ===');

let arr5 = [1, [2, 7, 8, [12, 16, [25, 41, 61, [43, 12, 35], 32, 17], 22, 11], 99],
    [3, 4],
    [5, [6, 7]]
];

function getNestingLevelMax(arr) {

}

console.log(getNestingLevelMax(arr5));