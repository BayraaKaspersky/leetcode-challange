// Source : https://leetcode.com/problems/running-sum-of-1d-array/description/
// Author : Bayarjargal
// Date   : 2024-09-26

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0 
    for(let i= 0 ; i <nums.length ; i++) {
      sum+=nums[i]
      nums[i] = sum
    }
    return nums
};
