const name = "ganesh"

console.log(typeof name); //string

const repoCount = 50

// console.log(name + " " + repoCount + " " + "Value"); //It is a old way

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`); // It is new way


const gameName = new String('ganesh,gn')
// console.log(typeof gameName); //object
// console.log(gameName[0]);  // o/p: g
// console.log(gameName.__proto__); // o/p: {}   it is object

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

// const newString = gameName.substring(0,4)
// console.log(newString);

// const anotherString = gameName.slice(1,2)
// console.log(anotherString);

// const anotherString = gameName.slice(-8,4)
// console.log(anotherString);

const newStringOne = "   ganesh  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20navale"

console.log(url.replace('%20','-'))
console.log(url.includes('sundar'))

console.log(gameName.split(',').join('-'));
