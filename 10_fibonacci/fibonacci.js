const fibonacci = function (n) {
  // Handle invalid input
  n = Number(n);
  if (n < 0) return "OOPS"; // Negative or zero input
  if (n === 0) return 0; // 0th Fibonacci is 0
  if (n === 1 || n === 2) return 1; // First two Fibonacci numbers

  let a = 1; // First number in the sequence
  let b = 1; // Second number in the sequence

  for (let i = 3; i <= n; i++) {
    const next = a + b; // Calculate the next number
    a = b; // Shift `a` to `b`
    b = next; // Update `b` to the new Fibonacci number
  }

  return b; // Return the `n`th Fibonacci number
};

// Do not edit below this line
module.exports = fibonacci;
