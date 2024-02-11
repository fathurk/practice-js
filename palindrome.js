var palindrome = ["ada", "lala", "racecar", "turbo", "civic", "jojo"];

function palindromeChecker(listString) {
  // ma code
  let reversed = [];
  let result = [];
  let y =[];
  
  for (let i = 0; i < listString.length; i++) {
    let x = "";
    if (listString[i].length > 0 && typeof listString[i] == "string") {
      let temp = [];
      for (let j = listString[i].length; j >= 0; j--) {
        if (typeof listString[i][j] != "undefined") {
          temp.push(listString[i][j]);
          y = temp.join(x);
        }
        // result.push(y)
      }
    }
    reversed.push(y);

    if(listString[i] == reversed[i]){
      result.push(reversed[i])
    }
  }

  return result;
}

console.log(palindromeChecker(palindrome));
