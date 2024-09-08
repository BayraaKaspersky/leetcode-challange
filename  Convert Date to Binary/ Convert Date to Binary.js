// Source : https://leetcode.com/contest/weekly-contest-414/problems/convert-date-to-binary/
// Author : Bayarjargal
// Date   : 2024-09-08

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

var reduce = function (nums, fn, init) {
  let val = init;
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }
  return val;
};
