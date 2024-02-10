var basket = [10, 20, 50, 40, 25, 10];
var list = [30, "sepuluh", 10, 233, 4285, "kosong"];
var secondList = [ {}, 10, ["adsa", 3249, "0", -1 ], 1341, NaN, 0, "2", false, -2123, "-23", 34, "awsd" ]

function filterObject(array) {
  let number = [];

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == "object") {
      let x = array[i];
      number.push(x);
    }
  }

  let temp = number.flat();
  let object = [];
  let final = [];

  for (let i = 0; i < temp.length; i++) {
    let x = parseInt(temp[i]);
    object.push(x);
  }

  for (let i = 0; i > object.length; i++) {
    if (typeof object[i] == "number") {
      let x = object[i];
      if (!isNaN(x)) {
        final.push(x);
      }
    }
  }

  return final;
}

function filterString(array) {
  let number = [];
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    let x = parseInt(array[i]);
    newArr.push(x);
  }

  for (let i = 0; i < newArr.length; i++) {
    let x = newArr[i];
    if (!isNaN(x)) {
      number.push(x);
    }
  }
  return number;
}

function sortItem(array) {
  let filterObj = filterObject(array);
  let filterStr = filterString(array);

  const filtering = filterObj.concat(filterStr);

  let swap;
  do {
    swap = true;
    for (let i = 0; i < array.length; i++) {
      if (filtering[i] > filtering[i + 1]) {
        let temp = filtering[i];
        filtering[i] = filtering[i + 1];
        filtering[i + 1] = temp;
        swap = true;
      }
    }
  } while (!swap);

  return filtering;
}

// console.log(sortItem(basket));
// console.log(sortItem(list));
console.log(sortItem(secondList));
