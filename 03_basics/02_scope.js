var c = 300
let a = 10
 
if (true) {
    let a = 500
    const b = 20
    console.log("INNER:", a);
    
}

console.log(a);
// console.log(b);
console.log(c);



 /* Nested scope */   

 function one(){
    const username = "ganesh"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);

    two()
    
 }
 one()

 if (true) {
    const username = "ganesh"
    if(username === "ganesh"){
        const website = "youtube"
        console.log(username + website); //o/p: ganesh youtube
    }
    //  console.log(website); //o/p: Error:website is not defined
    
 }
//  console.log(username); //o/p: Error:username is not defined
 

// ++++++++++++++++++ interesting ++++++++++++++++++++++

// function addOne(num){
//     return num + 1
// }

// addOne(5)


// const addTwo = function(num){
//     return num + 2
// }
// console.log(addTwo(5));  // o/p: 7



// console.log(addOne(5)); // o/p: 6
// function addOne(num){
//     return num + 1
// }


console.log(addTwo(5)); // ReferenceError : Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}
