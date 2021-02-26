// === №117.1 ===

console.log('');
console.log('// === №117.1 ===');

let arr = [1, 2, 3, 4, 5];
let result = 0;
let getSquare = function(num) {
    return num ** 2;
}


arr.forEach(elem => {
    return result + getSquare(elem)
});

console.log(result);