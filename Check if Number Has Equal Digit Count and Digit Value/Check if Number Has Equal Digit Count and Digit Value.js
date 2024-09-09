// Source : https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/description/
// Author : Bayarjargal
// Date   : 2024-09-09

/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
  const freq = {};

  for (let i of num) {
    freq[i] = (freq[i] || 0) + 1;
  }

  for (let i = 0; i < num.length; i++) {
    const expectedCount = parseInt(num[i]);
    if ((freq[i] || 0) !== expectedCount) {
      return false;
    }
  }

  return true;
};
