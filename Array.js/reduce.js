const total = [100, 500, 600,520, 630, 456, 125.40]

 /*const Bile = total.reduce(function(acc,currvalue){
        console.log(`aac value: ${acc} and courent value: ${currvalue}`)
    return (acc + currvalue)
 },0)*/
 const Bile = total.reduce((a,c)=>(a+c),0)
 //console.log(Bile)

 const shoppingCart = [
    {
        itemName: 'java',
        price: 100
    },
    {
        itemName: 'c++',
        price: 300
    },
    {
        itemName: 'JC',
        price: 400
    }
 ]
 /*const PriceTotal = shoppingCart.reduce (function (a,i){
    console.log(`arr val: ${a} and item val: ${i}`)
       
    return (a + i.price )
 },99)*/
  const PriceTotal = shoppingCart.reduce((arr,item)=> (arr+ item.price),0)
  console.log(PriceTotal)
