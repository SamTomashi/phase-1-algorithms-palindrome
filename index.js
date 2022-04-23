function isPalindrome(word) {
  // Write your algorithm here
  const inputArray = word.split('');
  const reversedInputArray = inputArray.reverse();
  const joinedReversedInputArray = reversedInputArray.join('');
  return joinedReversedInputArray == word;
}

/* 
  Add your pseudocode here
  Variable inputArray = array of each letter of word;
  Variable reversedInputArray = inputArray.reverse()
  Variable joinedReversedInputArray = reversedInputArray.join()
  Return joinedReversedInputArray == word
*/

/*
  Add written explanation of your solution here
  1. Split and store each letter of word in an array
  2. Reverse the array of letters
  3. Join the reversed array of letters to get the reversed word
  4. return joined reversed array == to word
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
