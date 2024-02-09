var basket = [10, 20, 50, 40, 25, 10 ] 
 
function sortItem (array) {
 // ur code
  array.sort((a, b) => {
    return a - b;
});
return array
}

// console.log(sortItem(basket))
var sortedBasket = sortItem(basket);
console.log(sortedBasket);







var list = [ 30, "sepuluh", 10, 233, 4285, "kosong"]

// console.log(sortItem(list))