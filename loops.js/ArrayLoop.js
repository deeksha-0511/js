// for of

const arr = [1,5,6,7]

for (const num of arr ) {
    //console.log(num);
}

const deeksha = ( "Hello")
for (const dee of deeksha){
    //console.log(`Each char is ${dee}`)
}

// Map 

 const map = new Map()

 map.set('1', "deeksha")
 map.set('2', "raksha")
 map.set('3', "saami")
 map.set('1', "deeksha")

 //console.log(map);
 for (const [key, value] of map) {
    //console.log(key, ':-', value);
 }
const myObj = {
    name: "deeksha",
    age : "25",
    lopction: "jabalpur"
}

/*for (const [key, value] of myObj) {
   console.log(key, ':-', value);
}*/
 for (const key in myObj) {
     //console.log(`${key} is for ${myObj[key]}`);
        
    }

  const num = [1,5,6,7]

  for (const key in num) {
     
    //console.log(num[key]);
        
    }
    /*
    const map1 = new Map()

 map1.set('1', "deeksha")
 map1.set('2', "raksha")
 map1.set('3', "saami")
 map1.set('1', "deeksha")

 for (const key in map1) {
   
        const element = map1(key);
        console.log(key);        
     
 }*/

 const  coding = ["js", "java", "c++"]

 /*coding.forEach( function (item) {
    console.log(item);
 }  )*/

// coding.forEach((item) => {console.log(item)})

//coding.forEach((item,index, arr) => {
   // console.log(item,index, arr);})
   const myconding = [
    {
        name: "deeksha",
        sub:"java"
    },
    {
        name: "raksha",
        sub:"c++"
    },
    {
        name: "rohit",
        sub:"js"
    }
]
    myconding.forEach((index)=>{
        console.log(`Name : ${index.name} Sub : ${index.sub}`);
    })

  


  
 



