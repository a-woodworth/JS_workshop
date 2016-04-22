// The lastDigit function accepts two non-negative integer arguments and returns true or false if they have the same last digit.

// For example, lastDigit accepts two non-negative integer values. Return true if both number arguments have the same last digit, such as 27 and 57 and false if the last two digits are not equal, such as 998 and 999.

// Examples

// - INPUT: lastDigit(22,32);
// - OUTPUT: true

// - INPUT: lastDigit(77, 999);
// - OUTPUT: false

// - INPUT: lastDigit(33,3);
// - OUTPUT: true

function lastDigit(num1, num2) {
  if (num1.toString().slice(-1) === num2.toString().slice(-1)) {
    return true;
  } else {
    return false;
  }
}
lastDigit(22,32);
lastDigit(77, 999);
lastDigit(33,3);


