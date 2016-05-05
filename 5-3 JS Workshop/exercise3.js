/**
 Challenge 3: Get Phone numbers
 Let's say you wanted to send text messages to many users? You might need to take an array of user objects and transform it into an array of phone numbers

Example;

var users = [
  { name: 'zeke', phone: 5102955523 },
  { name: 'john', phone: 1234567890 },
  ...

];

getPhoneNumbers(users);
// -> '[5102955523, 1234567890, ...]

**/

function getPhoneNumbers(users) {
  var phoneArray = [];
  for (var i = 0; i < users.length; i ++) {
   if (users[i].phone !== undefined)
    phoneArray.push(users[i].phone);
  }
  return phoneArray;
}


/** Challenge 3b: Pluck
A function to grab phone numbers from an array of users is great, but you could imagine doing things like this over and over again. Let's write a funciton to grab some property of an array of objects

Example:
pluck([{ name: 'zeke', email: 'zeke@zeke.com'}, {name: 'foo', email:'foo@foo.com'}], 'email');
// -> ['zeke@zeke.com','foo@foo.com']
**/

function pluck(objects, key) {
  var newArray = [];
  for (var i = 0; i < objects.length; i ++) {
   newArray.push(objects[i][key]);
  }
  return newArray;
}

/**
 * ^^^^^^^^^^^^^^^^
 * YOUR CODE ABOVE
 * TESTS ARE BELOW
 **/
describe('getPhoneNumbers', function() {

  it('should return an array', function() {
    expect(getPhoneNumbers([]) instanceof Array).toBe(true);
  });

  it('should pluck phone numbers', function() {
    var users = [
      { name: 'foo', phone: 888 },
      { name: 'bar', phone: 999 }
    ];
    var phones = getPhoneNumbers(users)
    expect(phones).toContain(888);
    expect(phones).toContain(999);
  });

  it('should not grab undefined values', function() {
    expect(getPhoneNumbers([{},{}]).length).toBe(0);
  });
});

describe('pluck', function() {
  it('plucks the correct key', function() {
    var value = pluck([{ name: 'zeke' }], 'name');
    expect(value[0]).toBe('zeke');

    var otherValue = pluck([{foobar: 'baz'}], 'foobar');
    expect(otherValue[0]).toBe('baz');
  })
})

