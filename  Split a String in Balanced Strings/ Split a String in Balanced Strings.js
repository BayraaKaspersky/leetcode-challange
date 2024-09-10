// Source : https://leetcode.com/problems/split-a-string-in-balanced-strings/description/
// Author : Bayarjargal
// Date   : 2024-09-11

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let count = 0;
  let balance = 0;

  for (let char of s) {
    balance += char === "R" ? 1 : -1;
    if (balance === 0) {
      count++;
    }
  }
  return count;
};
