// let score = "33"
// console.log(typeof score);
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);

// let score = "33abc"
// let valueInNumber = Number(score)
// console.log(valueInNumber);

// let score = undefined
// let valueInNumber = Number(score)
// console.log(valueInNumber);

// let score = true
// let valueInNumber = Number(score)
// console.log(valueInNumber);

// let score = "ganesh"
// let valueInNumber = Number(score)
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
 

// let isLoggedIn = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);


// let isLoggedIn = ""
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// let isLoggedIn = "ganesh"
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

//1 => true; 0=> false
// "" => false
// "hitesh" => true


// let someNumber = 33
// let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ************************* Operations ******************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello"
let str2 = "hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log((3+4) * 5 % 3);

// console.log(+true); //bad habit
// console.log(+"");  //bad habit

// let num1, num2, num3 
// num1 = num2 = num3 = 2 + 2 //bad habit

let gameCounter = 100
// gameCounter++ // postfix 
// ++gameCounter // prefix
// console.log(gameCounter);

let x = 3;
const y = x++;   // return the value before the increment

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a; // return the value after the increment

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
