// Source : https://leetcode.com/problems/power-of-three/description/?envType=problem-list-v2&envId=math
// Author : Bayarjargal
// Date   : 2024-09-09

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n <= 0) return false;
  while (n % 3 === 0) {
    n /= 3;
  }
  return n === 1;
};
