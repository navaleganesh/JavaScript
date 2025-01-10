/* Immediately Invoked Function Expressions (IIFE) */

// function chai(){
//     console.log(`DB CONNECTED`); // o/p: Error
    
// }()
 
(function chai(){
    console.log(`DB CONNECTED`); // o/p: DB CONNECTED
    
})(); //Semicolon is must otherwise below code not work   // Avoid a global pollution so use the invoked function

// (function chai()=>{
    // named IIFE
//     console.log(`DB CONNECTED`); // o/p: DB CONNECTED
    
// })();


((name)=>{
    // unamed IIFE
    console.log(`DB CONNECTED ${name}`); // o/p: DB CONNECTED ganes
})('ganesh');