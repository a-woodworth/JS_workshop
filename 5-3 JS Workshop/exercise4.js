/**
 Challenge 4: Keys and Values
 Let's move on from the user objects into more general territory. I want you to write two utility functions: keys and values. Let's try an example.

 The following object represents Senator Kirk's third vote in the House in 2001 when he was a congressman. You can get all of them at www.govtrack.us ;) !

 var vote = {
  "created": "2001-01-03T15:55:00",
  "value": "Not Voting",
  "category": "procedural",
  "category_label": "Procedural",
  "chamber": "house",
  "chamber_label": "House",
  "id": 50902,
  "number": 3,
  "question": "On Motion to Commit: H RES 5 Adopting Rules for the One Hundred Seventh Congress"
}

Let's say we just wanted to know the "keys" of this object.

keys(vote)
// -> ["created", "value", "category", "category_label", "chamber", "chamber_label", "id", "number", "question"]

Now let's say we want just the values

values(vote)
// -> ["2001-01-03T15:55:00", "Not Voting", "procedural", "Procedural", "house", "House", 50902, 3, "On Motion to Commit: H RES 5 Adopting Rules for the One Hundred Seventh Congress"]
**/

function keys(obj) {
  // return Object.keys(obj);
  var array = [];
  for(var key in obj){
    array.push(key);
  }
  return array;
}

function values(obj) {
  var newArray = [];
  for(var key in obj) {
    newArray.push(obj[key]);
  }
  return newArray;
}

/**
 * ^^^^^^^^^^^^^^^^
 * YOUR CODE ABOVE
 * TESTS ARE BELOW
 **/
describe('keys', function() {
  it('returns an array', function() {
    expect(Array.isArray(keys({}))).toBe(true);
  });

  it('pulls correct keys', function() {
    var zeke = {
      name: 'zeke',
      dob: new Date('4/29/1991')
    };
    expect(keys(zeke)).toEqual(['name', 'dob'])
  });

  it('works for arrays', function() {
    var arr = ['a','b','c'];
    expect(keys(arr)).toContain('0');
    expect(keys(arr)).toContain('1');
    expect(keys(arr)).toContain('2');
  });

  it('does not call Object.keys', function() {
    var original = Object.keys;
    var called = false;
    Object.keys = function() {
      called = true;
    };
    keys({});
    expect(called).toBe(false);
    Object.keys = original;
  });
});

describe('values', function() {
  it('returns an array', function() {
    expect(Array.isArray(keys({}))).toBe(true);
  });

  it('returns the correct values', function() {
    var vals = values({
      name: 'zeke',
      email: 'zeke@zeke.com'
    });
    expect(vals).toEqual(['zeke','zeke@zeke.com'])
    expect(values({})).toEqual([]);
  })
});
