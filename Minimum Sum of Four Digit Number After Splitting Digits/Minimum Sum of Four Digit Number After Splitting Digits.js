// Source : https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/
// Author : Bayarjargal
// Date   : 2024-09-13

/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
  let arr = num.toString().split("").map(Number).sort();
  return (arr[0] * 10 + arr[3]) + (arr[1] * 10 + arr[2]);
};
