// Source : https://leetcode.com/problems/valid-palindrome/
// Author : Bayarjargal
// Date   : 2025-07-01

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length === 0) return true
    s = s.replace(/[^a-zA-Z0-9]/g , "").trim().toLowerCase()
    let left = 0 
    let right = s.length-1
    while(left<right){
        if(s[left] !== s[right]) {
            return false
        }
        left++
        right--
    }
    return true
};
