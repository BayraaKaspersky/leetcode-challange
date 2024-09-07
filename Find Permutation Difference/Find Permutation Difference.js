// Source : https://leetcode.com/problems/permutation-difference-between-two-strings/
// Author : Bayarjargal
// Date   : 2024-09-07

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function (s, t) {
  let diff = 0;
  for (let i = 0; i < s.length; i++) {
    diff += Math.abs(i - t.indexOf(s[i]));
  }

  return diff;
};
