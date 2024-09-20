// Source : https://leetcode.com/problems/base-7/description
// Author : Bayarjargal
// Date   : 2024-09-20

/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if (num === 0) return "0"

    let isNegative = num < 0
    num = Math.abs(num)
    let result = ""

    while (num > 0) {
        result = (num % 7) + result
        num = Math.floor(num / 7)
    }

    return isNegative ? "-" + result : result
};
