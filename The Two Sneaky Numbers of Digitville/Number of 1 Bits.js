// Source : https://leetcode.com/problems/number-of-1-bits/
// Author : Bayarjargal
// Date   : 2024-09-17

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
  const str = n.toString(2)
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '1') {
      count++;
    }
  }
  return count
};
