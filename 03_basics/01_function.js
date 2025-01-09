function sayMyName(){
    console.log("G");
    console.log("A");
    console.log("N");
    console.log("E");
    console.log("S");
    console.log("H");
}

//sayMyName()  // Only 'sayMyName' is reference & it's '()' excute

// function addTwoNumbers(number1, number2){ // number1, number2 is parameter
//     console.log(number1 + number2); 
// }
// addTwoNumbers(3,4)   // 3,4 is arguments


// function addTwoNumbers(number1, number2){ 
//     console.log(number1 + number2); 
// }
// const result = addTwoNumbers(3,5)
// console.log("Result : ", result); //o:p undefined



// function addTwoNumbers(number1, number2){ 
//    let result = number1 + number2;
//    return result;
//    console.log("Hitesh"); // It will not print cz of after return not excute the code
   
// }
// const result = addTwoNumbers(3,5)
// console.log("Result : ", result); //o:p 8



// function addTwoNumbers(number1, number2){ 
//     return number1 + number2;
   
//  }
//  const result = addTwoNumbers(3,5)
//  console.log("Result : ", result); //o:p 8


// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username");
//     }
//     return `${username} just logged in`   
// }
// console.log(loginUserMessage("Ganesh")) //o/p: Ganesh
// console.log(loginUserMessage()); //o/p: undefined


// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username"); //o/p: Please enter a username
//     }
//     return `${username} just logged in`   
// }
// console.log(loginUserMessage()); //o/p:  undefined just logged in 



// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username"); //o/p: Please enter a username
//         return
//     }
//     return `${username} just logged in`   
// }
// console.log(loginUserMessage()); //o/p:  undefined



// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter a username"); //o/p: Please enter a username
//         return
//     }
//     return `${username} just logged in`   
// }
// console.log(loginUserMessage()); //o/p:  undefine



// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("Please enter a username"); 
//         return
//     }
//     return `${username} just logged in`   
// }
// console.log(loginUserMessage()); //o/p:  sam just logged in


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username"); 
        return
    }
    return `${username} just logged in`   
}
console.log(loginUserMessage("ganesh")); //o/p:  ganesh just logged in