// Create the function askPolitely that accepts a sentence as an argument. If the last character of the sentence is a question mark, then make sure the question ends with the word "please?".

// If a question is already polite (meaning it already ends with "please") or the sentence is not a question, ​then return the inputted string without modification.

// Examples

// - INPUT: askPolitely("May I borrow your pencil?");
// - OUTPUT: "May I borrow your pencil please?"

// - INPUT: askPolitely("May I ask a question please?");
// - OUTPUT: "May I ask a question please?"

// - INPUT: askPolitely("My name is Grace Hopper.");
// - OUTPUT: "My name is Grace Hopper.";

function askPolitely(string) {
  var askNice;
  if (string.slice(-7) === 'please?') {
    return string;

  } else if (string.slice(-1) === '?') {
    return string.slice(0, -1) + ' please?';

  } else if (string.slice(-1) === '.') {
    return string;
  }
}
askPolitely('May I borrow your pencil?');
askPolitely("May I ask a question please?");
askPolitely("My name is Grace Hopper.");


