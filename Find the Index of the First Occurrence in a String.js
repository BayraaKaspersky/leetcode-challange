// Source : https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
// Author : Bayarjargal
// Date   : 2024-10-11

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return needle === "" ?  0 :  haystack.indexOf(needle)
};
