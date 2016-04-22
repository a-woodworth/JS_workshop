// Write a function to convert a variable name from under_score format to camelCase.

// Make sure you support an unlimited number of underscores in the input!

// Examples:

// - INPUT: underToCamel("first_name");
// - OUTPUT: "firstName"

// - INPUT: underToCamel("my_income_tax_from_2015");
// - OUTPUT: "myIncomeTaxFrom2015"

function underToCamel(string) {
  var newString = '';
  var removeUnderscore;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === '_' ) {
      newString += string[i+1].toUpperCase();
      removeUnderscore = i+1;
    } else if (removeUnderscore !== i){
      newString += string[i].toLowerCase();
    }
  }
  return newString;
}
underToCamel("first_name");
underToCamel("my_income_tax_from_2015");
