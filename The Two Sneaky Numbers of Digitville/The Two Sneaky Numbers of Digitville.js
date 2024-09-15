// Source : https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/description/
// Author : Bayarjargal
// Date   : 2024-09-15

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
  let freq = {};
  let arr = [];
  for (let num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }

  const filtered = Object.entries(freq).filter(([key, value]) => value === 2);
  return filtered.map(([key, _]) => Number(key));
};
