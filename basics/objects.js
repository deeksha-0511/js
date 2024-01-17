

//object literals
const mySym = Symbol("key1")

const user = {
    name:"deeksha",
    "full name": "Deeksha Jain",
    age: 28,
    location:"jabalpur",
    email: "dee@google.com"
}

//console.log(user.age)
//console.log(user["name"])
//console.log(user["full name"])
//console.log(user[mySym])

user.email = "dee@chatgpt.com"
//Object.freeze(user)
user.email = "dee@microsoft.com"
//console.log(user);


user.greeting = function(){
    console.log("Hello JS user");
}
user.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(user.greeting());
console.log(user.greetingTwo());