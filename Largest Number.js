// Source : https://leetcode.com/problems/largest-number/
// Author : Bayarjargal
// Date   : 2024-09-19

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums = nums.map(String)
    nums.sort((a,b) => (b + a) - (a + b))
    let result = nums.join('');  
    return result[0] === '0' ? '0' : result;
};
