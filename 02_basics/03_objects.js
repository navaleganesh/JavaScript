// singleton (Koi bhi constructor banate ho to ek singleton create hota hai)
// Object.create // Isye constructor method ke through bolte hai yahi signleton hai


// object literals
const mySym = Symbol("key1")
 
const JsUser = {
    name : "Ganesh",
    "full name": "Ganesh Navale",
    [mySym]:"mykey1",
    age: 18,
    location:"Pune",
    email:"ganesh@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
//How to access object? Some person access like this
// console.log(JsUser.email); //o/p: ganesh@gmail.com
// console.log(JsUser["email"]); //o/p: ganesh@gmail.com
// console.log(JsUser["full name"]); //o/p : Ganesh Navale
// console.log(JsUser.location); //o/p : Pune
// console.log(typeof JsUser.location); //o/p : string
// console.log(JsUser[mySym]); //o/p : mykey1


JsUser.email = "ganesh@chatgpt.com"
// Object.freeze(JsUser) //freeze karna means object mai update nahi hota
JsUser.email = "ganesh@microsoft.com" // Not update in below obj due to freeze
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


JsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JsUser.greeting); // o/p: [Function (anonymous)] Function excute nahi hua hai only reference aaya hai
console.log(JsUser.greeting()); // o/p: Hello JS user


/* Object ke under mai name ko reference kar na hai below code  */

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting()); // o/p: Hello JS user
console.log(JsUser.greetingTwo()); // o/p: Hello JS user, Ganesh