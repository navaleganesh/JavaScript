const user = {
    username: "ganesh",
    price: "999",
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); //o/p:{}




// function chai(){
//     console.log(this);
// }
// chai()



// function chai(){
//     let username = "ganesh"
//     console.log(this.username); // o/p: undefined
// }
// chai()



// const chai = function(){
//     let username = "ganesh"
//     console.log(this.username); // o/p: undefined
// }
// chai()



// const chai = () => {
//     let username = "ganesh"
//     console.log(this.username); // o/p: undefined
//     console.log(this); //o/p:{}
    
// }
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4));    


/* Implicit return */
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(3,4));

/* Explicit return */

const addTwo = (num1, num2) => ({username :"ganesh"})
console.log(addTwo(3,4)); // o/p: { username: 'ganesh' }


