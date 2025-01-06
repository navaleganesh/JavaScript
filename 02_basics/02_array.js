const marvel_heros = ["Thor","Ironman","spiderman"]
const dc_heros = ["Superman","flash","Batman"]

// marvel_heros.push(dc_heros) //o/p: ["Thor","Ironman","spiderman"]
// console.log(marvel_heros); //o/p: ["Thor","Ironman","spiderman",["Superman","flash","Batman"]]
// console.log(marvel_heros[3][1]); ["flash",]


// const allHeros = marvel_heros.concat(dc_heros) 
// console.log(allHeros); // o/p: [ 'Thor', 'Ironman', 'spiderman', 'Superman', 'flash', 'Batman' ]

//spread operator(...)
// const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros); //o/p: [ 'Thor', 'Ironman', 'spiderman', 'Superman', 'flash', 'Batman' ]

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array = another_array.flat(Infinity) // means deep tak jata manlo flat(1) hai to 1 index tak array dikhyega 
// console.log(real_another_array); //o/p : [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


/*** isArray, from***/
//data select karte to alg format mai array ata hai like object, nodelist, string etc tab Array.isArray() use karna
console.log(Array.isArray("ganesh")) // o/p: false (isArray Only tell type array hai ya nahi)
console.log(Array.from("ganesh")) // o/p : [ 'g', 'a', 'n', 'e', 's', 'h' ] (from, string ko array mai convert karke deta hai)
console.log(Array.from({name:"ram"})); //o/p: []  interview purpose

/***only key cha array banvine in object***/
// const myObject = {
//     name: "John",
//     age: 30,
//     profession: "Developer"
//   };
  
  // Create an array from the keys of the object
//   const keysArray = Object.keys(myObject);
//  console.log(keysArray); // o/p: ["name", "age", "profession"]
  


 
 /***only values cha array banvine in object***/
 const myObject1 = {
    name: "John",
    age: 30,
    profession: "Developer"
  };
  
  // Create an array from the values of the object
  const valuesArray = Object.values(myObject1);
  
  console.log(valuesArray);  //o/p: ["John", 30, "Developer"]
 


/*** Array.of() ke through values ko array mai convert karte hai ***/
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); // o/p : [ 100, 200, 300 ]  (of, also convert into array )

 
