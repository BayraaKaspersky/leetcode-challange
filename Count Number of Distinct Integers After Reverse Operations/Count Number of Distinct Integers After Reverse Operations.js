// Source : https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/description/
// Author : Bayarjargal
// Date   : 2024-09-09

/**
 * @param {number[]} nums
 * @return {number}
 */
function countDistinctIntegers(nums) {
  const set = new Set(nums);

  for (let i in nums) {
    const reversed = parseInt(nums[i].toString().split("").reverse().join(""));
    set.add(reversed);
  }

  return set.size;
}
