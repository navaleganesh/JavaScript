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





/* Nested object, Combine Object, Access keys & values */
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sita"
tinderUser.isLoggedIn = false

console.log(tinderUser);

//Nested object
const regularUser = {
    email:"some@gmail.com",
    fullName: {
        userfullname:{
            firstname:"Ganesh",
            lastname:"Navale"
        }
    }
}
console.log(regularUser.fullName.userfullname.firstname);

//Combine Object
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

const obj3 = {obj1, obj2}
console.log(obj3); //o/p:  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

//Two way to combine object

//First Way
const obj4 = Object.assign({},obj1, obj2)
console.log(obj4) //o/p: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//Second way
const obj5 = {...obj1, ...obj2} //Use spread operator
console.log(obj5) //o/p: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


//How to acces Object keys & values
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // o/p: [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // o/p: [ '123abc', 'Sita', false ]
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // o/p: true



//Database se value aayegi to aisi aayegi just for example diya hai

// const users = [
//     {
//         id:1,
//         email:"g@gmail.com"
//     },
//     {
//         id:2,
//         email:"g@gmail.com"
//     },
//     {
//         id:3,
//         email:"g@gmail.com"
//     },

// ]
// users[1].email



/* Destructuring object  */
const course = {
    coursename:"js in hindi",
    price: "999",
    courseInstructor: "ganesh"
}

// const {courseInstructor} = course
// console.log(courseInstructor); // o/p: ganesh


// const {courseInstructor: instructor} = course // Yaha pai name change kiya
// console.log(instructor); // o/p: ganesh



/*In react  */
// const navbar = ({company})=>{

// }
// navbar(company = "hitesh")

//json format data
// [
//     {},
//     {},
//     {}
//  ]

