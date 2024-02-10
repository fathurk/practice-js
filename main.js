var basket = [10, 20, 50, 40, 25, 10];
var list = [30, "sepuluh", 10, 233, 4285, "kosong"];

function filterArr(array) {
  let number = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == "number") {
      let x = array[i];
      number.push(x);
    }
  }
  return number;
}
function sortItem(array) {
  const filter = filterArr(array);
  let swap;
  do {
    swap = false;
    for (let i = 0; i < array.length; i++) {
        if (filter[i] > filter[i + 1]) {
          let temp = filter[i];
          filter[i] = filter[i + 1];
          filter[i + 1] = temp;
          swap = true;
        }
    }
  } while (swap);

  return filter;
}

console.log(sortItem(basket));
console.log(sortItem(list));
