/*
Match passwords that
* have at least 5 characters
* have two consecutive digits
* are not only digits
*/

let sampleWord = "12345";
let pwRegex = /(?=\w{5,})(?=\D+\d{2,})/;
let result = pwRegex.test(sampleWord);

// Examples:
/*
astronaut  // false
banan1  // false
bana12  // true
abc123  // true
12345  // false
8pass99  // true
1a2bcde  // false
astr1on11aut  // true
*/
