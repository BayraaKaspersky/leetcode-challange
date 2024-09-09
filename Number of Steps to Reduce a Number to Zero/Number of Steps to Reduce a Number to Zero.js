// Source : https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/description/
// Author : Bayarjargal
// Date   : 2024-09-09

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let count = 0;
  while (num > 0) {
    count++;
    num % 2 == 0 ? (num /= 2) : (num -= 1);
  }
  return count;
};
