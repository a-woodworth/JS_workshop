/**
 Challenge 5: Zip
 Sometimes you have two arrays and you want to turn them into an object, like this:

 zip(['name','email'], ['Zeke', 'zeke@zekecom.com']);
 // -> { name: 'Zeke', email: 'zeke@zekecom.com' }
**/

function zip(keyArray, valueArray) {
  var newObject = {};
  for (var i = 0; i < keyArray.length; i++) {
    newObject[keyArray[i]] = valueArray[i];
  }
  return newObject;
}

/**
 * ^^^^^^^^^^^^^^^^
 * YOUR CODE ABOVE
 * TESTS ARE BELOW
 **/
describe('zip', function() {
  it('returns an object', function() {
    expect(zip([],[])).toEqual({});
  });

  it('has correct keys and values', function() {
    var test1 = zip(['name','email'], ['Zeke', 'zeke@zekecom.com']);
    expect(test1).toEqual({ name: 'Zeke', email: 'zeke@zekecom.com' });

    var test2 = zip(['a','b','c'],['d','e', 'f']);
    expect(test2).toEqual({a: 'd', b: 'e', c: 'f'});
  });
});
