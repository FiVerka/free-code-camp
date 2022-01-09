/*
Fill in the "urlSlug" function so it converts a string "title" and returns the hyphenated version for the URL.

* Don't use "replace".
* The input is a string with spaces and title-cased words
* The output is a string with the spaces between words replaced by a hyphen ("-")
* The output should be all lower-cased letters
* The output should not have any spaces
*/

function urlSlug(title) {
  return title
    .split(" ")
    .filter(item => Boolean(item))
    .map(item => item.toLowerCase())
    .join("-");
}


urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");  // a-mind-needs-books-like-a-sword-needs-a-whetstone
urlSlug("Winter Is Coming");  // winter-is-coming
urlSlug(" Winter Is  Coming");  // winter-is-coming
