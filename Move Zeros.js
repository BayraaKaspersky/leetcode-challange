https://leetcode.com/problems/move-zeroes/
// Author : Bayarjargal
// Date   : 2025-07-16

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
   let zeroIndex = 0
   let size = nums.length 
   for(let i = 0 ; i <size; i++) {
       if(nums[i] != 0 ) {
          nums[zeroIndex] = nums[i]   
          zeroIndex++    
       }
   } 
    for(let i = zeroIndex ; i <size; i++) {
        nums[i] = 0 
    }
};
