var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var item_object={itemName: item, itemPrice: Math.floor(1+100*Math.random())}
 cart.push(item_object);
 return `${item} has been added to your cart.`
}	



function viewCart() {
  var content = []
  if (cart.length===0){
    return `Your shopping cart is empty.`
  }else if(cart.length>=3) {
    for (var i = 0; cart.length>i; i++){
      content.push(cart[i]['ItemName'] + " at $" + cart[i]['ItemPrice'])}
      return `In your cart, you have ${content.join(', ')}, and ${cart[cart.length-1]['itemName']} at $ ${cart[cart.length-1]['ItemPrice']}`
  }else if (cart.length===2){
     for (var i = 0; cart.length>i; i++){
      content.push(cart[i]['ItemName'] + " at $" + cart[i]['ItemPrice'])}
      return `In your cart, you have ${content[0]}, and ${content[1]}`
    } else if (cart.length===1){
      return `In your cart, you have ${cart[0]['itemName']} at $ ${cart[0]['ItemPrice']}`
    }
  }


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
