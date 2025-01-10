// for of

//["", "", ""] // string in array
//[{}, {}, {}] // object in array

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const geetings = "Hello world!"
for (const greet of geetings) {
    //console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('Fr','France')
// console.log(map);
// o/p: Map(3) {
//   'IN' => 'India',
//   'USA' => 'United States of America',
//   'Fr' => 'France'
// }


// for (const key of map) {
//     console.log(key);
// }
// o/p: 
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]


// for (const [key,value] of map) {
//     console.log(key, ':-', value);
// }
// o/p:
// IN :- India
// USA :- United States of America
// Fr :- France


// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'Spiderman'
// }

// for (const [key,value] of myObject) {
//     console.log(key, ':-', value);  //o/p: myObject is not iterable
// }

