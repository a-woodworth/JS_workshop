// Create a function repeat that accepts two arguments...the string to repeat, and a number that represents how many times to repeat the string. Return a string that concatenates the number of times the string is repeated.

//     NOTE: Do not use the String.prototype.repeat

// Examples

// - INPUT: repeat("yo",4);
// - OUTPUT: 'yoyoyoyo'

// - INPUT: repeat("yo",0);
// - OUTPUT: ''

// - INPUT: repeat("bye",6);
// - OUTPUT: 'byebyebyebyebyebye'

function repeat(string, num) {
  var otherString = '';
  for (i = 0; i < num; i++) {
    otherString += string;
  }
  return otherString;
}
repeat("yo",4);
repeat("yo",0);
repeat("bye",6);
