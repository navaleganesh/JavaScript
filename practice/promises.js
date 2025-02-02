/* Object - Change value, freeze value, access value & function, Add value & function, acces object value in the function  */

//Singleton
// const obj1 = new Object()


//Objects Literals
const mySym= Symbol("key1")

const JsUser = {
    name:"Ganesh",
    "full name" : "Ganesh Navale",
    age:18,
    location:"Pune",
    email:"ganesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"],
    [mySym]:"mykey1" //Symbol
}

//How to access value in Object
// console.log(JsUser.name); 
// console.log(JsUser['age']); // using [''] also access
// console.log(JsUser['full name']); // Spacing name access
// console.log(JsUser[mySym]); // Symbol access


//How to change value in Object
JsUser.email = "ganesh@chatgpt.com"

//How to freeze value
// Object.freeze(JsUser)
JsUser.email = "ganesh@microsoft.com" // This value didn't change due to Object.freeze()
// console.log(JsUser);

//How to access function
JsUser.greeting =function(){
    console.log("Hello JS user");
    
}
// console.log(JsUser.greeting); // o/p: [Function (anonymous)]  --- It is a function reference
// console.log(JsUser.greeting()); // o/p: Hello JS user


//Add function in the object & access the value from object using 'this' keyword
JsUser.greetingTwo =function(){
    console.log(`Hello JS user, ${this.name}`);
}
// console.log(JsUser.greetingTwo()); // o/p: Hello JS user, Ganesh








