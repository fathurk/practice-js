const basket = [10, 20, 50, 40, 25, 10 ] 
const list = [ 30, "sepuluh", 10, 233, 4285, "kosong"]
const secondList = [ {}, 10, , 1341, NaN, [2000], 0, "2", false, ["adsa", 3249, "0", -1 ], -2123, "-23", 34, "awsd" ]

 
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
 const numberOnly = secondArray(array)
  let len = array.length;
  let swapped;
  
 do {
   swapped = false;
   for (let i =  0; i < len; i++) {
    if (numberOnly[i] > numberOnly[i +   1]) {
      let temp = numberOnly[i];
      numberOnly[i] = numberOnly[i +   1];
      numberOnly[i +   1] = temp;
      swapped = true;
    }
  }
} while (swapped);
return numberOnly;
}

// console.log(sortItem(basket))



// console.log(sortItem(list))
// console.log(sortItem(basket))


function secondArray (array) {
  let firstResult = [];
  let arrayFlat = array.flat()
  for (let i = 0; i < arrayFlat.length; i++) {
    if (typeof arrayFlat[i] === 'number'&& !isNaN(arrayFlat[i])) {
      firstResult.push(arrayFlat[i])
    } else if (typeof arrayFlat[i] === 'string') {
      arrayFlat[i] = parseFloat(arrayFlat[i])
      firstResult.push(arrayFlat[i])
    }
  }

  // for (let j = 0; j < arrayFlat[2].length; j++) {
  //   if (typeof arrayFlat[2][j] === 'number') {
  //     firstResult.push(arrayFlat[2][j])
  //   } else if ( typeof arrayFlat[2][j] === 'string') {
  //     arrayFlat[2][j] = parseFloat(arrayFlat[2][j])
  //     firstResult.push(arrayFlat[2][j])
  //   }
  // }

  return firstResult
}


let boom = secondArray(secondList)

console.log(sortItem(boom))


// output
// [ -2123, -23, -1, 0, 0, 2, 10, 34, 3249 ]