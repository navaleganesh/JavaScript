/* Object - Change value, freeze value, access value & function, Add value & function, acces object value in the function  */


// singleton (Koi bhi constructor banate ho to ek singleton create hota hai)
// Object.create // Isye constructor method ke through bolte hai yahi signleton hai


// object literals
const mySym = Symbol("key1")
 
const JsUser = {
    name : "Ganesh",
    "full name": "Ganesh Navale",
    [mySym]:"mykey1", //Symbol
    age: 18,
    location:"Pune",
    email:"ganesh@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

//How to access value in Object

// console.log(JsUser.email); //o/p: ganesh@gmail.com
// console.log(JsUser["email"]); //o/p: ganesh@gmail.com
// console.log(JsUser["full name"]); //o/p : Ganesh Navale
// console.log(JsUser.location); //o/p : Pune
// console.log(typeof JsUser.location); //o/p : string
// console.log(JsUser[mySym]); //o/p : mykey1  --- Symbol access



//How to change value in Object
JsUser.email = "ganesh@chatgpt.com"

//How to freeze value
 Object.freeze(JsUser)
JsUser.email = "ganesh@microsoft.com" // This value didn't change due to Object.freeze()

// console.log(JsUser); 
/* o/p:
{
  name: 'Ganesh',
  'full name': 'Ganesh Navale',
  age: 18,
  location: 'Pune',
  email: 'ganesh@chatgpt.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mykey1'
}*/




//How to access function
JsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JsUser.greeting); // o/p: [Function (anonymous)] Function excute nahi hua hai only reference aaya hai
console.log(JsUser.greeting()); // o/p: Hello JS user


//Add function in the object & access the value from object using 'this' keyword
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting()); // o/p: Hello JS user
console.log(JsUser.greetingTwo()); // o/p: Hello JS user, Ganesh