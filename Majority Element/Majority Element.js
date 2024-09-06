// Source : https://leetcode.com/problems/majority-element/description/
// Author : Bayarjargal
// Date   : 2024-09-06

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let freq = {};
  let len = Math.floor(nums.length / 2) + 1;

  for (let i of nums) {
    freq[i] = (freq[i] || 0) + 1;
  }

  for (let num in freq) {
    if (freq[num] >= len) {
      return Number(num);
    }
  }
};
