let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let myCreateDte = new Date(2024, 0, 20)
//let myCreateDte = new Date("2024-01-25")

//console.log(myCreateDte.toLocaleDateString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreateDte.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",
    //timeZone: ''
})