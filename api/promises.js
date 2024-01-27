const proOne = new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log('Hello Deeksha');
    resolve()
  },1000)
})

proOne.then(function(){
    console.log('Wellcome');
})

new Promise(function(resolve,reject){
     setTimeout(function(){
        console.log('wellcome user');
        resolve()
     })
}).then(function(){
     console.log('too.....js');
})

const proThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({user:"Deeksha", email: "dee@gmail.com"})
    },1000)
  
})

proThree.then(function(user){
  console.log(user);
})

const proFour = new Promise(function(resolve,reject){
    let error = false //true
    if(!error){
        resolve({userName:'rohit' , password: '1234'})
    }
    else {
        reject ('ERROR: something went wrong')
    }
})
proFour.then(function(user){
    console.log(user);
   return user.password
}).then((password) => {
    console.log(password)
}).catch(function(er){
     console.log(er);
}).finally(()=> console.log('promise ho gya'))

const proFive = new Promise(function(resolve,reject){
    let error = false //true
    if(!error){
        resolve({userName:'js' , password: '8770'})
    }
    else {
        reject ('ERROR: something went wrong js')
    }
})
async function consumePromiseFive (){
  try{
    const pf = await proFive 
    console.log(pf);
  }catch(err) {
     console.log(err);
  }
}
consumePromiseFive()
/*
async function getallData (){
   try {
    const repons = await fetch('https://jsonplaceholder.typicode.com/users')
   const data = await repons.json();
   console.log(data);
   } catch (error) {
    console.log("ERROR");
   }
}
getallData()*/

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    //console.log(data);
   return data.name.json()
}).then((name)=>{
     
      console.log(name);
})
.catch ((er)=>console.log(ERROR))