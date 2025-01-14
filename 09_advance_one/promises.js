/* pending: initial state, neither  fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.*/




/* 1 - approach */
// const promiseOne = new Promise(function(resolve,reject){
//     // Do an async task
//     // DB calls, cryptography call, network call

//     setTimeout(function(){
//         console.log('Async task is compelete');  

//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

//o/p: Async task is compelete











/* 2 - approach */
// const promiseOne = new Promise(function(resolve,reject){
//     // Do an async task
//     // DB calls, cryptography call, network call

//     setTimeout(function(){
//         console.log('Async task is compelete');
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

//o/p: Async task is compelete
// Promise consumed 



// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved");

// })
//o/p: Async task 2
//     Async 2 resloved











/* 3 - approach */

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Chai", email:"chai@chai.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);

// })
// o/p:{ username: 'Chai', email: 'chai@chai.com' }







/* 4 - approach */
// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username:"ganesh",password:"123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.username
// }).then((myusername)=>{
//     console.log(myusername);

// }).catch(function(err){
//     console.log(err);

// })
// o/p(let error = true):ERROR: Something went wrong  
// o/p(let error = true):{ username: 'ganesh', password: '123' }
// ganesh



// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username:"ganesh",password:"123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.username
// }).then((myusername)=>{
//     console.log(myusername);

// }).catch(function(err){
//     console.log(err);

// }).finally(()=>{
//     console.log("The promise is either resolved or rejected");

// })
// o/p(let error = true):ERROR: Something went wrong  
//o/p: The promise is either resolved or rejected

// o/p(let error = false):{ username: 'ganesh', password: '123' }
// ganesh
//o/p: The promise is either resolved or rejected





/* 5 - approach */
// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false
//         if (!error) {
//             resolve({ username: "ganesh", password: "123" })
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// })

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive
//     console.log(response);
//     } catch(err){
//         console.log(err);
        
//     }

// }
// consumePromiseFive()

// o/p(let error = true):ERROR: JS went wrong  
// o/p(let error = false):{ username: 'ganesh', password: '123' }







/* 6 - approach */

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//     const data = await response.json()
//     console.log(data);
//     } catch(err){
//         console.log("Error: ",err);
        
//     }
    
// }
// getAllUsers()




/* 7 - approach */
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((err)=>{
    console.log(err);
    
})
