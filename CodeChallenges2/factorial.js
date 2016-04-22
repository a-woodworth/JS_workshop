// Create the function factorial(num) that returns the factorial of the parameter.

// For n=0, 0! = 1; 5! = 1×2×3×4×5 = 120; recursive factorial formula (n! = n×(n-1)!)

// Example:

// - INPUT: factorial(4);
// - OUTPUT: 24

// -INPUT: factorial(5);
// -OUTPUT: 120

function factorial(num) {
  // If less than 0, reject number.
  if (num < 0) {
    return 'Please enter a non-negative number.';
  }
  // If 0, 0! = 1.
  else if (num === 0) {
    return 1;
  }
  else {
    return (num * factorial(num - 1));
  }
}

factorial(5);
factorial(4);
factorial(0);
factorial(-1);
