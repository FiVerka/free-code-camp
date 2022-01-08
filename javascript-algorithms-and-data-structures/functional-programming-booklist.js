/*
Rewrite the code so the global array "bookList" is not changed inside either function.
The "add" function should add the given "bookName" to the end of the array passed
to it and return a new array (list). The "remove" function should remove
the given "bookName" from the array passed to it.
*/

// The global variable
const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae"
];


function add (myBookList, bookName) {
  return [...myBookList, bookName];
}


function remove (myBookList, bookName) {
  const book_index = myBookList.indexOf(bookName);
  if (book_index >= 0) {
    return [...myBookList.slice(0, book_index), ...myBookList.slice(book_index + 1, myBookList.length)];
    }
}


const newBookList = add(bookList, 'A Brief History of Time');
const newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
const newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');


newBookList;  // ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]
newerBookList;  // ["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]
newestBookList;  // ["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]
bookList;  // still equal ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]
