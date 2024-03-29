//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Deeksha",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


// stack (primitive) , Heap (Non-Primitive)

let MyMemory = "Deeksha"

let myFullName =  MyMemory 
myFullName = "deeksha jain"

console.log(myFullName);
console.log(MyMemory);

let userOne = {
    name: "user",
    email: "user@gmail"
}
//console.log(userOne);

let userTwo = userOne

userTwo.email="dee@gmail.com"
userTwo.name="Deeksha"


console.log(userOne);