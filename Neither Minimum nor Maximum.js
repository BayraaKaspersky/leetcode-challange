// Source : https://leetcode.com/problems/neither-minimum-nor-maximum/description/
// Author : Bayarjargal
// Date   : 2024-10-02

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    const sorted = [...nums.sort((a, b) => a-b)]
    sorted.pop()
    sorted.shift()
    let min = Math.min(...sorted)
    return min === Infinity ? -1 : min
};
