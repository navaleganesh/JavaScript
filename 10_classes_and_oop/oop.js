const user = {
    username : "Ram",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got User details from database");
        console.log(`Username ${this.username}`);
        
    }
}


// console.log(user.username);
// console.log(user.getUserDetails());

function User(name, age){
    this.name = name
    this.age = age
    this.greeting = function(){
        console.log(`my name is ${this.name}`);
    }
}

const infoOne = new User("ganesh", 25)
console.log(infoOne);
infoOne.greeting()