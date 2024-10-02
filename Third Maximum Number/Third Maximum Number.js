// Source : https://leetcode.com/problems/third-maximum-number/description/
// Author : Bayarjargal
// Date   : 2024-10-02

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const sorted = [...new Set(nums)].sort((a, b) => b - a)
    return sorted.length >= 3 ? sorted[2] : sorted[0]
};
