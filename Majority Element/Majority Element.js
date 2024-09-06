// Source : https://leetcode.com/problems/majority-element/description/
// Author : Bayarjargal
// Date   : 2024-09-06

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let freg = {};
  let len = Math.floor(nums.length / 2);
  for (let i of nums) {
    freg[i] = (freg[i] || 0) + 1;
  }

  return freq.some((num) => num >= len);
};
