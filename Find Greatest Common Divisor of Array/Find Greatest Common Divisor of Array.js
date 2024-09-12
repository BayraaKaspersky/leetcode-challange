// Source : https://leetcode.com/problems/count-the-number-of-consistent-strings/
// Author : Bayarjargal
// Date   : 2024-09-12

/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
  let minNum = Math.min(...nums);
  let maxNum = Math.max(...nums);

  while (maxNum !== 0) {
      const temp = maxNum;
      maxNum = minNum % maxNum;
      minNum = temp;
  }
  return minNum
};
