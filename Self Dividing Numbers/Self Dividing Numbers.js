// Source : https://leetcode.com/problems/self-dividing-numbers/
// Author : Bayarjargal
// Date   : 2024-09-06

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  let arr = [];
  for (let i = left; i <= right; i++) {
    if (
      i
        .toString()
        .split("")
        .every((digit) => i % digit === 0)
    )
      arr.push(i);
  }
  return arr;
};
