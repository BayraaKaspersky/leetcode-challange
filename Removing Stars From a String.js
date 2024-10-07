// Source : https://leetcode.com/problems/removing-stars-from-a-string/description/
// Author : Bayarjargal
// Date   : 2024-10-07

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let arr = []
    for(let char of s) {
        char === "*" ? arr.pop() : arr.push(char)
    } 
    return arr.join("")
}
