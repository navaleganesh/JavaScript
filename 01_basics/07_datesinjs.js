//Dates

// let myDate = new Date()
// console.log(myDate); //o/p: 2025-01-04T13:07:52.227Z
// console.log(myDate.toString()); //o/p: Sat Jan 04 2025 18:38:38 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); //o/p: Sat Jan 04 2025
// console.log(myDate.toLocaleString()); //o/p: 4/1/2025, 6:40:47 pm
// console.log(typeof myDate); // o/p: object

// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate); //o/p: 2023-01-22T18:30:00.000Z
// console.log(myCreatedDate.toString()); //o/p: Mon Jan 23 2023 00:00:00 GMT+0530 (India Standard Time)
// console.log(myCreatedDate.toDateString()); //o/p: Mon Jan 23 2023

// let myCreatedDate = new Date(2023,0,23,5,3)
// console.log(myCreatedDate); //o/p: 2023-01-22T23:33:00.000Z
// console.log(myCreatedDate.toString()); //o/p: Mon Jan 23 2023 05:03:00 GMT+0530 (India Standard Time)
// console.log(myCreatedDate.toDateString()); //o/p: Mon Jan 23 2023


// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate); //o/p: 2023-01-14T00:00:00.000Z
// console.log(myCreatedDate.toString()); //o/p: Sat Jan 14 2023 05:30:00 GMT+0530 (India Standard Time)
// console.log(myCreatedDate.toDateString()); //o/p: Sat Jan 14 2023

// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate); //o/p: 2023-01-13T18:30:00.000Z
// console.log(myCreatedDate.toString()); //o/p: Sat Jan 14 2023 05:30:00 GMT+0530 (India Standard Time)
// console.log(myCreatedDate.toDateString()); //o/p: Sat Jan 14 2023


// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate); //o/p: 2023-01-13T18:30:00.000Z
// console.log(myCreatedDate.toString()); //o/p: Sat Jan 14 2023 05:30:00 GMT+0530 (India Standard Time)
// console.log(myCreatedDate.toDateString()); //o/p: Sat Jan 14 2023


// let myCreatedDate = new Date("01-14-2023")
// let myTimeStamp = Date.now()
// console.log(myTimeStamp); //o/p: 1736008614816 It is a milisecond
// console.log(myCreatedDate.getTime()); //o/p: 1673634600000  It is a milisecond
// console.log(Math.floor(Date.now()/1000)); //o/p: 1736008805 second  Ask in interview

// let newDate = new Date()
// console.log(newDate); //o/p: 2025-01-04T16:41:26.039Z
// console.log(newDate.getMonth()); //o/p: 0
// console.log(newDate.getMonth() + 1); //o/p: 1
// console.log(newDate.getDay()); //o/p: 6
// console.log(newDate.getFullYear()); //o/p: 2025

let newDate = new Date()
let customDate = newDate.toLocaleString('default',{
    weekday:"long",
    day:"numeric"
})
console.log(customDate); // o/p : Saturday 4
