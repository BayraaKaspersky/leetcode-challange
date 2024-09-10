// Source : https://leetcode.com/problems/strictly-palindromic-number/description/
// Author : Bayarjargal
// Date   : 2024-09-10

/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function (n) {
  let b = n.toString(2);
  return b === n.toString(2).split("").reverse();
};
