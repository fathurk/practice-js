var palindrome = ["ada", "lala", "racecar" ,"turbo", "civic", "jojo" ]
var level2 = ["kuda", "HellnaH", "Sees", "DooD", "LayAL", "JOOJ", "kuUUk"]

function palindromeChecker (listString) {
    // ur code
  const result = []
  for (let i = 0; i < listString.length; i++) {
    let reversed = ""
    if(typeof listString[i] === 'string') {
      const next = listString[i].toLowerCase()
      for (let j = next.length - 1; j >= 0; j--) {
        next[j] = next[j].toLowerCase()
        reversed += next[j]
      }
    if (reversed === next) {
      result.push(listString[i])
    }
    }
  }
  return result
}

console.log(palindromeChecker(palindrome))
// output
// ['ada', 'racecar', 'civic' ]

console.log(palindromeChecker(level2));
// output 
// [ 'SeeS', 'DooD' 'LayAL', 'JOOJ', 'kuUUk'] 
