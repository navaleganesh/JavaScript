//singleton
// const tinderUser = new Object() // It is a singleton object
// console.log(tinderUser); //o/p: {}
 
const tinderUser = {} // It is a non-singleton object
console.log(tinderUser); //o/p: {}

tinderUser.id = "123abc"
tinderUser.name = "Ram"
tinderUser.isLoggedIn = false
//console.log(tinderUser); //o/p:{ id: '123abc', name: 'Ram', isLoggedIn: false }


const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname : {
            firstname:"Shri Krishna",
            lastname:"Yadav"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); //o/p: Shri Krishna

const obj1 ={
    1: "a",
    2: "b"
}
const obj2 ={
    3: "a",
    4: "b"
}
const obj4 ={
    5: "a",
    6: "b"
}
// const obj3 = {obj1,obj2}
// console.log(obj3); //o/p : { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }


// const obj = Object.assign({},obj1,obj2,obj4)
// console.log(obj); //o/p: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj = {...obj1,...obj2,...obj4}
console.log(obj);//o/p: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


const users = [
    {
        idL:1,
        email:"h@gmail.com"
    },
    {
        idL:2,
        email:"abc@gmail.com"
    },
    {
        idL:3,
        email:"xyz@gmail.com"
    },
]
console.log(users[1].email) //o/p: abc@gmail.com

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //o/p: [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); //o/p: [ '123abc', 'Ram', false ]


/* Object under pura loop through karte hai,
Loop karne ke baad ek value nikal rahe hai, to value nikalte time kya hota hai,
Kai bar wo value exist nahi karti hai to crash hone ke chances hai so below code dekho    */

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //o/p: true



const course = {
    coursename : "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// const {courseInstructor} = course
// console.log(courseInstructor);

// const {courseInstructor:instructor} = course
// console.log(instructor);

/*In react  */
// const navbar = ({company})=>{

// }
// navbar(company = "hitesh")

 [
    {},
    {},
    {}
 ]