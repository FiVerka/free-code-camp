/*
Title Case a Sentence
Return the provided string with the first letter of each word capitalized.
Make sure the rest of the word is in lower case.
*/

function titleCase(str) {
  return str.toLowerCase().split(" ").map(str => str[0].toUpperCase() + str.slice(1)).join(" ");
}

console.log(titleCase("I'm a little tea pot"));  // I'm A Little Tea Pot
