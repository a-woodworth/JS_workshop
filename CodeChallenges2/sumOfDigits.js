// Create the function sumOfDigits that adds individual digits of a number, and returns the sum.

// Examples:

// - INPUT: sumOfDigits(414);
// - OUTPUT: 9

// - INPUT: sumOfDigits(2913);
// - OUTPUT: 15
function sumOfDigits(number) {
  var formatNumber = number.toString();
  var splitNumber = [];

  for (var i = 0; i < formatNumber.length; i++) {
    splitNumber.push(formatNumber.charAt(i));
    //console.log(splitNumber);
  }
  var makeNumAgain;
  makeNumAgain = splitNumber.map(Number);
  //console.log(makeNumAgain);

  var sum = 0;
  for(var j = 0; j < makeNumAgain.length; j++){
   sum += makeNumAgain[j];
  }
  //console.log(sum);
  return sum;
}
sumOfDigits(2913);
sumOfDigits(414);

