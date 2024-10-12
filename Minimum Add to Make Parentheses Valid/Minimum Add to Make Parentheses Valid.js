// Source : https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/description/
// Author : Bayarjargal
// Date   : 2024-10-09

/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let arr = []
    for(let char of s) {
        arr[arr.length - 1] === "(" && char === ")" ? arr.pop() : arr.push(char)
    }
    return arr.length
};
