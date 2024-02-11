var palindrome = ["ada", "lala", "racecar", "turbo", "civic", "jojo"];

function palindromeChecker(listString) {
  // ma code
  let result = [];
  for (let i = 0; i < listString.length; i++) {
    let x;
    let y;
    if (listString[i].length > 0) {
      let info = listString[i].length;
      x = listString[i].charAt(0);
      y = listString[i].charAt(info - 1);
      if (x == y) { 
        result.push(listString[i]);
      }
    }
  }
  return result;
}

console.log(palindromeChecker(palindrome));

