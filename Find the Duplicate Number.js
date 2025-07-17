// Source : https://leetcode.com/problems/find-the-duplicate-number/description
// Author : Bayarjargal
// Date   : 2025-07-17

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let set = new Set()
    for(let i in nums) {
        if(set.has(nums[i])) return nums[i]
        set.add(nums[i])
    }
};
