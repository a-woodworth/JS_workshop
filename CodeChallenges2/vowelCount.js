// Create the function vowelCount(str) that takes a str parameter and returns the number of vowels the string contains (ie. "Fullstack Academy" would return 5).

// Do not count 'y' as a vowel for this challenge.

// Examples

// - INPUT: vowelCount("Good Job");
// - OUTPUT: 3

// - INPUT: vowelCount('Yankees');
// - OUTPUT: 3

function vowelCount(str) {
  var vowelList = 'aeiouAEIOU';
  var vowel_count = 0;

  for(var i = 0; i < str.length; i++) {
    if (vowelList.indexOf(str[i]) !== -1) {
      vowel_count += 1;
    }
  }
  return vowel_count;
}
vowelCount("Good Job");
vowelCount('Yankees');
