// Source : https://leetcode.com/problems/self-dividing-numbers/
// Author : Bayarjargal
// Date   : 2024-09-06

/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  if (num <= 1) return false;
  let sum = 0;
  for (let i = 1; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum == num;
};
