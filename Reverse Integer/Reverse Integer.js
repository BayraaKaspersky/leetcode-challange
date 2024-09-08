// Source : https://leetcode.com/problems/reverse-integer/description/
// Author : Bayarjargal
// Date   : 2024-09-09

/**
 * @param {number} x
 * @return {number}
 */

function reverse(x) {
  const MAX_INT = 2 ** 31 - 1;
  const MIN_INT = -(2 ** 31);

  let reversed = parseInt(Math.abs(x).toString().split("").reverse().join(""));
  reversed = x < 0 ? -reversed : reversed;

  if (reversed < MIN_INT || reversed > MAX_INT) {
    return 0;
  }

  return reversed;
}

// Another Way

function reverse(x) {
  const MAX_INT = 2147483647;
  const MIN_INT = -2147483648;

  let reversed = 0;
  let num = x;

  while (num !== 0) {
    const lastDigit = num % 10;
    reversed = reversed * 10 + lastDigit;
    num = (num / 10) | 0;
  }

  if (reversed < MIN_INT || reversed > MAX_INT) {
    return 0;
  }

  return reversed;
}
