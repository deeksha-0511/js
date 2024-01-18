 function userloginmsg (userName = "Deeksha"){
    if(!userName){
        console.log("plze login")
        return
    }
     return `${userName} logIn user`

 }
 console.log(userloginmsg())