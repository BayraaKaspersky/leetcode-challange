// Source : https://leetcode.com/problems/calculate-digit-sum-of-a-string/description
// Author : Bayarjargal
// Date   : 2024-10-01

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var digitSum = function (s, k) {
    while (s.length > k) {
        let result = ''
        for (let i = 0; i < s.length; i += k) {
            let group = s.substring(i, Math.min(i + k, s.length))
            let sum = group.split('').reduce((acc, cur) => acc + Number(cur), 0)
            result += sum.toString()
        }

        s = result
    }
    return s
};
