/*
A function "makeList()" uses template literal syntax with backticks
to create an array of list element ("li") strings.
Each list element's text is one of the array elements from the "failure"
property on the "result" object and have a "class" attribute with
the value "text-warning". 
The "makeList" function returns the array of list item strings and
uses an iterator method to get the desired output (shown below).

Example:
const failuresList = makeList(result.failure);
-> returns:
[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
*/

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    const text = `<li class="text-warning">${arr[i]}</li>`
    failureItems.push(text);
  }
  return failureItems;
}
