// Source : https://leetcode.com/problems/add-to-array-form-of-integer/description/
// Author : Bayarjargal
// Date   : 2024-10-09

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
   return (BigInt(num.join('')) + BigInt(k)).toString().split('').map(Number)
};
