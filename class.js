// Questions 1
/*  Let's Shop 'Til We Drop!: Write a function named checkout that accepts 2 parameters named cardBalance and price. If the price is more than the cardBalance, return the message "Sorry, can't afford it."; otherwise, return the message
*    "Thanks for your purchase! Your new card balance is [new balance]."

*   For example, checkout(100, 50) should return "Thanks for your purchase! Your new card balance is 50."
*   and checkout(100, 200) should return "Sorry, can't afford it."
*/
function checkout(cardBalance, price){
  if(price > cardBalance) {
    return 'Sorry, can\'t afford it.'
  } else {
   return 'Thanks for your purchase! Your new card balance is ' + cardBalance - price
  }
}
  
