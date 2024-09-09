// Source : https://leetcode.com/problems/count-the-digits-that-divide-a-number/description/
// Author : Bayarjargal
// Date   : 2024-09-09

/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  let str = num.toString();
  const count = str.split("").reduce((acc, digit) => {
    digit = parseInt(digit, 10);
    return digit !== 0 && num % digit === 0 ? acc + 1 : acc;
  }, 0);

  return count;
};
