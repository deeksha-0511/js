 function myFan (){
    console.log("D");
    console.log("D");
    console.log("D");
    console.log("D4");

}
//myFan()

/*function addNumber (number1, number2){
   console.log(number1 + number2) ;
}
const result = addNumber(3, 20)*/


function addNumber (number1, number2)
    {
       //let result = (number1 + number2) ;
       //return result
       return number1 + number2
     }
     const result = addNumber(3, 20)
     //console.log((result));

   function locationUsermag (userName = "Deeksha"){
    if(!userName){
    //if(userName === undefined){
        //console.log("please enter auser name")
        return
    }
    return `${userName} just logged in`
   }  
   //console.log(locationUsermag("dee"))
   //console.log(locationUsermag(""))
   //console.log(locationUsermag())

   function calculateCartPrice(v1,v2,...num1){
    return num1

   }
   //console.log(calculateCartPrice(2,5,6,8));

   const user = {
    userName: "deeksha",
    price:200
   }
   function handlobj (anyobject){
    //console.log( `User Name: ${anyobject.userName} Price: ${anyobject.price}`)

   }
   //handlobj(user)
   handlobj ({
    userName:"Rohit",
    price: 500
   })

   const myNewArray = [2,5,7,9]
   function value(getArray) {
    return getArray[2]
   }
   console.log(value(myNewArray));

