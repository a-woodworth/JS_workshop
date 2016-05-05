/**
 * Challenge 2: Get property
 * Write a function that extracts and returns a given property of an object.
 *
 * If you pass the function one of those user objects and the string 'phone', it should return the phone number
 *
 * Example:
 * get({... phone: 2345, ...}, 'phone');
 * -> 2345
 **/

function get(obj, key) {
  return obj[key]
}

/**
 * ^^^^^^^^^^^^^^^^
 * YOUR CODE ABOVE
 * TESTS ARE BELOW
 **/

describe('get', function() {
  it('returns the value of the object', function() {
    expect(get({ name: 'zeke' }, 'name')).toBe('zeke');
    expect(get({ name: 'claire'}, 'name')).toBe('claire');
  });
});
