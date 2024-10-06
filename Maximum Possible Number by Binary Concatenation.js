// Source : https://leetcode.com/problems/maximum-possible-number-by-binary-concatenation/description/
// Author : Bayarjargal
// Date   : 2024-10-06

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxGoodNumber = function(nums) {
    nums.sort((a, b) => {
    let binA = a.toString(2)
    let binB = b.toString(2)
    return (binB + binA) - (binA + binB)
    })
  
    let bin = ""
    for(let num of nums) {
        bin+= num.toString(2)
    }
    return parseInt(bin , 2)
};

