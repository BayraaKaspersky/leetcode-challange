// Source : https://leetcode.com/problems/find-triangular-sum-of-an-array/
// Author : Bayarjargal
// Date   : 2024-10-01

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    while(nums.length > 1 ) {
      let arr = []
      for(let i = 0 ; i<nums.length - 1 ; i++ ) {
        arr.push((nums[i] + nums[i+1]) % 10)
      }
      nums = arr
    }
    return nums[0]
};
