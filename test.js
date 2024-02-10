const list = [ 30, "sepuluh", 10, 233, 4285, "kosong"]

function numberOnly (number) {
  let numbers = []

  for (let i = 0; i < number.length; i++) {
    if (typeof number[i] === 'number') {
      numbers.push(number[i]);
    }
  }
  return numbers
}

function sortItems (items) {
  const numbOnly = numberOnly(items);
  let iNum = items.length
  let swapped;

  do {
    swapped = false
    for (let i = 0; i < iNum; i++) {
      if (numbOnly[i] > numbOnly[i +  1]) {
        let box = numbOnly[i]
        numbOnly[i] = numbOnly[i + 1]
        numbOnly[i + 1] = box

        swapped = true
      }
    }
  } while (swapped)
  return numbOnly
}

console.log(numberOnly(list))
console.log(sortItems(list))