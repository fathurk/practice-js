const basket = [10, 20, 50, 40, 25, 10 ] 
const list = [ 30, "sepuluh", 10, 233, 4285, "kosong"]

 
function stringFilter(array) {
  let numberOnly = []

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      numberOnly.push(array[i])

    }
  }
  return numberOnly;
}


function sortItem (array) {
 // ur code
 const numberOnly = stringFilter(array)
  let len = array.length;
  let swapped;
  
 do {
   swapped = false;
   for (let i =  0; i < len; i++) {
    if (typeof numberOnly[i] === 'number'&& typeof numberOnly[i + 1] === 'number') {
      if (numberOnly[i] > numberOnly[i +   1]) {
        let temp = numberOnly[i];
        numberOnly[i] = numberOnly[i +   1];
        numberOnly[i +   1] = temp;
        swapped = true;
      }
    }
  }
} while (swapped);
return numberOnly;
}

// console.log(sortItem(basket))

console.log(sortItem(list))
console.log(sortItem(basket))
