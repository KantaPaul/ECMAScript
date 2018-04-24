// 38 - Symbols


/* eslint-disable */
let apple = Symbol("Apple"),
  banana = Symbol("Banana"),
  banana2 = Symbol("Banana");

// symbol content all time unique
console.log(banana === banana2);

let fruits = {
  [Symbol("Apple")]: {color: "Red", weight: 100},
  [Symbol("Pineapple")]: {color: "Green", weight: 200},
  [Symbol("Pineapple")]: {color: "Green", weight: 200}
}

console.log(fruits);

// convert to array

let syms = Object.getOwnPropertySymbols(fruits);

console.log(syms);

let data = syms.map(sym => fruits[sym]);

console.log(data);
/* eslint-enable */
