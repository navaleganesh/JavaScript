/* Data type */

// Primitive (Call by value)

// 7 types : String, Number, Boolean, null, undefined, Symbol,
//           BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

const bigNumber = 3156454896n


// Reference (Non primitive - Call by reference)

// Array, Objects, Functions

const heros = ["shaktiman","naagraj", "doga"]

let myObj = {
    name: "ganesh",
    age : 22
}

const myFunction = function(){
    console.log("hello world");
    
}

console.log(typeof bigNumber); // BigInt
console.log(typeof outsideTemp); // Object
console.log(typeof anotherId); // Symbol
console.log(typeof userEmail); // undefined
console.log(typeof myFunction); // function
console.log(typeof heros); // object

// Is javascript dynamically type or statically type language
// It is a dynamically language.




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "ganeshnavaledotcom"
let anotherName = myYoutubename

anotherName = "chaiaurcode"

console.log(myYoutubename);
console.log(anotherName);


let userOne = {
    email:"user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "ganesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
