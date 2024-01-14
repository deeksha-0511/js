const name = "Deeksha"
const age = 28

// console.log(name+ age);
console.log(`Hello i'm ${name} I'm ${age} yers old`);

const userName = new String('deeksha-jain-20')

console.log(userName[5]);
console.log(userName.trim());

console.log(userName.length);

console.log(userName.toUpperCase());
console.log(userName.charAt(4));
const newString = userName.substring(1,5)
console.log(newString);


const twoSting = userName.slice(2,5)
console.log(twoSting);

const url = "https:dee.com/dee%20jain"

console.log(url.replace('%20','-'))

console.log(userName.split('-'));