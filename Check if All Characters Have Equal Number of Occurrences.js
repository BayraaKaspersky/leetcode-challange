// Source : https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/description/
// Author : Bayarjargal
// Date   : 2024-10-08

/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let freq = {}
    for (let char of s) {
        freq[char] = (freq[char] || 0) + 1
    }
    const firstCount = freq[Object.keys(freq)[0]]
    for (let count of Object.values(freq)) {
        if (count !== firstCount) return false
    }
    return true
};
