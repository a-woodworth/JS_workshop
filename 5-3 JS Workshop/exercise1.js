/**
 * CHALLENGE 1: Write a function called sendText.
 * This function should pretend to send an SMS
 * to the user that's passed in.
 *
 * It pretends by returning "I'm sending
 * xxxxxx to xxxxxx"
 *
 * Remember, it should return, not console.log.
 *
 * This function takes two arguments. The
 * first is a user object. This object
 * contans a phone property. The second
 * argument is the message of the text.
 *
 * Example:
 * sendText({ phone: 1234567890, ...}, 'msg');
 * -> "I'm sending msg to 1234567890"
 *
 * But! The object will also contain a `isAsleep`
 * property. If the user is asleep, it shouldn't
 * send the message
 **/

function sendText(user, message) {
  return 'I\'m sending ' + message + ' to ' + user.phone;
}

/**
 * ^^^^^^^^^^^^^^^^^^^^^
 * YOUR CODE ABOVE.
 * TESTS ARE BELOW.
 * DO NOT MODIFY TESTS.
 **/

describe('SendText', function() {
  it('takes the phone numbers and messages and returns strings', function() {
    var result1 = sendText({ phone: 9876543210 }, 'Hi there!!');
    expect(result1).toBe("I'm sending Hi there!! to 9876543210");

    var result2 = sendText({ phone: 7777777777 }, 'Hi there2!!');
    expect(result2).toBe("I'm sending Hi there2!! to 7777777777");
  });
});
