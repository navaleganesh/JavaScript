// const score = 400
// console.log(score);
// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const otherNumber = 23.8966;
// console.log(otherNumber.toPrecision(3)); // op: 23.9

// const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(3)); // op: 124

// const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // op:10,00,000


// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // op:10,00,000

// ++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // o/p : 4 minus value positive hoti hai
// console.log(Math.round(4.3)); // o/p: 4
// console.log(Math.round(4.6)); // o/p: 5
// console.log(Math.ceil(4.2)); // o/p: 5 Jara si bhi 4 se uper hua to topest 5 print hoga
// console.log(Math.floor(4.9)); // o/p: 4  4 se uper hai but lowest hi lega
// console.log(Math.min(4,3,6,8)); // o/p: 3
// console.log(Math.max(4,3,6,8)); // o/p: 8

console.log(Math.random()); // o/p: 0.25208354847647785  0.4073303998687672 always see ouptput diffrent 0-1 range
console.log(Math.random()*10); // o/p: 8.057967779785782
console.log(Math.random()*10 + 1); // o/p : 2.6831546441476486
console.log((Math.random()*10) + 1); // o/p: 5.388130033657713
console.log(Math.floor(Math.random()*10) + 1); // o/p: 2


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // o/p: 10-20 range ki value aayegi