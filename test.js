// const list = [ 30, "sepuluh", 10, 233, 4285, "kosong"]

// function numberOnly (number) {
//   let numbers = []

//   for (let i = 0; i < number.length; i++) {
//     if (typeof number[i] === 'number') {
//       numbers.push(number[i]);
//     }
//   }
//   return numbers
// }

// function sortItems (items) {
//   const numbOnly = numberOnly(items);
//   let iNum = items.length
//   let swapped;

//   do {
//     swapped = false
//     for (let i = 0; i < iNum; i++) {
//       if (numbOnly[i] > numbOnly[i +  1]) {
//         let box = numbOnly[i]
//         numbOnly[i] = numbOnly[i + 1]
//         numbOnly[i + 1] = box

//         swapped = true
//       }
//     }
//   } while (swapped)
//   return numbOnly
// }

// console.log(numberOnly(list))
// console.log(sortItems(list))

const secondList = [ {}, 10, , 1341, NaN, [2000], 0, "2", false, ["adsa", 3249, "0", -1 ], -2123, "-23", 34, "awsd" ]
function extractNumbers(arr) {
  let result = [];

  function traverse(element) {
    if (typeof element === 'number') {
      result.push(element);
    } else if (Array.isArray(element)) {
      for (let i =  0; i < element.length; i++) {
        traverse(element[i]);
      }
    } else if (typeof element === 'string') {
      let numValue = parseFloat(element);
      if (!Number.isNaN(numValue)) {
        result.push(numValue);
      }
    }
  }

  for (let i =  0; i < arr.length; i++) {
    traverse(arr[i]);
  }

  return result;
}

const filteredNumbers = extractNumbers(secondList);
console.log(filteredNumbers);