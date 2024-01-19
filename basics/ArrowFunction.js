const user = {
    userName: "deeksha",
    price: 99,
    LoginMag: function(){
        console.log(`${this.userName} wellcome`);
        //console.log(this);
    }
}
user.LoginMag()
//user.userName ="rohit"
//user.LoginMag()
console.log(this);

function one (){
    //let username = "deeksha"// not allow
    // console.log(this.username); //not allow
}
one()

//+++++++++++++++++++++Arrow+++++++++++++++++

const Arrow = (num1, num2) => {
      return num1 + num2 
}
console.log(Arrow(5, 6))

const addTwo =(num1, num2) => ({userName:"deeksha"}) //(num1+num2)
console.log(addTwo(1,2))
