var palindrome = ["ada", "lala", "racecar" ,"turbo", "civic", "jojo" ]


function palindromeChecker (listString) {
    // ur code
  const result = []
  for (let i = 0; i < listString.length; i++) {
    let reversed = ""
    if(typeof listString[i] === 'string') {
      const next = listString[i]
      for (let j = next.length - 1; j >= 0; j--) {
        reversed += next[j]
      }
    if (reversed === listString[i]) {
      result.push(listString[i])
    }
    }
  }
  return result
}

console.log(palindromeChecker(palindrome))
// output
// ['ada', 'racecar', 'civic' ]