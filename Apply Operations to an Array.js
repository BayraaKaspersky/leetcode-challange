// Source : https://leetcode.com/problems/apply-operations-to-an-array/description/
// Author : Bayarjargal
// Date   : 2024-09-26

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var applyOperations = function(nums) {
    let arr = [ ] 
    let count = 0 

    for(let i=0; i<nums.length;i++) {
      if(nums[i] == nums[i + 1] ) {
        nums[i] = nums[i] * 2
        nums[i+1] = 0
      } 
    }
    return nums.filter(num => num !== 0).concat(nums.filter(num => num === 0))
};
