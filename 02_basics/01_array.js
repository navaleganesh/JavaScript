// array

 const myArr = [0,1,2,3,4,5]
// console.log(myArr[0])

// const myHeros =["shaktiman","naagraj"]

// const myArr2 =new Array(1,2,3,4)
// console.log(myArr2[0]);

// Array methods
 // myArr.push(6) // add value in end position
// myArr.push(7) 
// myArr.pop() // end value remove
// console.log(myArr);

// myArr.unshift(9) // add value in start position
// myArr.shift() // start value remove
// console.log(myArr);


// console.log(myArr.includes(9)); // o/p: false (includes means 9 value array mai hai ya nahi) 
// console.log(myArr.indexOf(3)); // o/p: 3 index dikhata hai


// const newArr = myArr.join()
// console.log(myArr); //o/p: [0,1,2,3,4,5] It's consider object
// console.log(newArr); //o/p: 0,1,2,3,4,5  Using myArr.join() It's consider string


// slice, splice

console.log("A", myArr); //o/p : A [ 0, 1, 2, 3, 4, 5 ]
const myn1 = myArr.slice(1,3) 
console.log(myn1);// o/p : [ 1, 2 ]
console.log("A", myArr); //o/p : A [ 0, 1, 2, 3, 4, 5 ]


const myn2 = myArr.splice(1,3)
console.log("C", myArr); // o/p :[ 0, 4, 5 ]
console.log(myn2); // o/p: [ 1, 2, 3 ]