"use strict";

// 112.1

function each(arr, func) {
   let result = [];
   for (let elem of arr) {
      result.push(func(elem))
   }
   return result;
};

function reverse(str) {
   return str.split('').reverse().join('');
}

let result = each(['one', 'two', 'three', 'four', 'five'], reverse);
console.log('№112.1');
console.log(result);

// 112.2

function UpperCase(str) {
   //let arr = str.split('');
   //arr[0] = arr[0].toUpperCase();
   //return arr.join('');
   return str[0].toUpperCase() + str.slice(1);
}

let result1 = each(['one', 'two', 'three', 'four', 'five'], UpperCase);
console.log('№112.2');
console.log(result1);

// 112.3

function each2(arr, callback) {
   let result = [];
   let i = 0;
   for (let elem of arr) {
      result.push(callback(elem, i));
      i++;
   }
   return result;
}

function getMiltiplication(num, i) {
   return num * i;
}

let result2 = each2([1, 2, 3, 4, 5], getMiltiplication);
console.log('№112.3');
console.log(result2);

// 112.4

function filter3(arr, callback) {
   let result = [];
   let i = 0;
   for (let elem of arr) {
      if (callback(elem, i)) {
         result.push(elem);
      }
   }
   return result;
}

let result3 = filter3([1, 2, 3, 4, 5], function (elem, index) {
   if (elem % 2 == 0) {
      return true;
   } else {
      return false;
   }
});

console.log('№112.4');
console.log(result3); // выведет [2, 4]

// 112.5

function filtr4(arr, callback) {
   let result = [];

   for (let elem of arr) {
      if (callback(elem)) {
         result.push(elem);
      }
   }
   return result;
}

let result4 = filtr4([8, -6, 4, 9, -3, 5, -1, 0, 6, -7], function (elem) {
   return elem >= 0;
})

console.log('№112.5');
console.log(result4);

// 112.6

function filtr5(arr, callback) {
   let result = [];

   for (let elem of arr) {
      if (callback(elem)) {
         result.push(elem);
      }
   }
   return result;
}

let result5 = filtr5(['дом', 'стрела', 'бар', 'ю', 'ия', 'шах', 'метла', 'ножницы', 'дождь'], function (str) {
   return str.length > 0 && str.length < 4;
});

console.log('№112.6');
console.log(result5);

// 112.7

function every(arr, callback) {
   for (let elem of arr) {
      if (!callback(elem)) {
         return false;
      }
   }
   return true;
}

let result6 = every([1, 2, 3, 4, 5], function (elem) {
   if (elem > 0) {
      return true;
   } else {
      return false;
   }
});

console.log('№112.7');
console.log(result6);

// 112.8

function some(arr, callback) {
   for (let elem of arr) {
      if (callback(elem)) {
         return true;
      }
   }
   return false;
}

let result7 = some([1, 2, 3, 4, 5], function (elem) {
   if (elem < 0) {
      return true;
   } else {
      return false;
   }
});

console.log('№112.8');
console.log(result7);

// 112.9

function alternate(arr,callback1, callback2){
  let result=[];
  for(let i=0; i<arr.length; i++){
    if(i%2==0){
      result.push(callback1(arr[i]))
    }else result.push(callback2(arr[i]))
  }
  return result;
}

let result8 = alternate(
   ['a', 'b', 'c', 'd', 'e'],
   function (elem) {
      return elem + '!';
   },
   function (elem) {
      return elem + '?';
   },
);

console.log('№112.9');
console.log(result8);