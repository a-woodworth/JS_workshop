// Create the function "reverseString" that reverses a string, and returns the value of the reversed string.

// NOTE: Do not use the .reverse() method

// Examples

// - INPUT: reverseString("hello");
// - OUTPUT: 'olleh'

function reverseString(string) {
  var reverseOrder = '';
  for (var i = string.length - 1; i >= 0; i--) {
    reverseOrder += string[i];
  }
  return reverseOrder;
}

reverseString("hello");

