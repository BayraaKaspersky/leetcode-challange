// Source : https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/
// Author : Bayarjargal
// Date   : 2024-10-04

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    nums.sort((a,b) => a-b)
    let sum = nums[nums.length-1]
    let prev = sum;
    while(k > 1) {
        sum+=++prev
        nums[nums.length-1] = sum
        k--
    }
    return sum
};
