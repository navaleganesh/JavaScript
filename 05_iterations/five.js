//forEach

const coding = ["js", "rubb", "python", "java", "cpp"]

// coding.forEach( function(val){
//     console.log(val);
    
// } )

// coding.forEach((val)=>{
//         console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)


// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// })


const myCoding = [
    {
        languageName : "javascript",
        languageFile : "js"
    },
    {
        languageName : "java",
        languageFile : "java"
    },
    {
        languageName : "python",
        languageFile : "py"
    }
]

// myCoding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
    
// }) 

myCoding.forEach((item)=>{
    console.log(item.languageName);
    
}) 