// Source : https://leetcode.com/problems/valid-anagram/
// Author : Bayarjargal
// Date   : 2024-09-18

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return false
    let str1 = t.split("").sort()
    let str2 = s.split("").sort()
  
    for(let i in str1 ) { 
      if(str1[i] != str2[i]) return false 
    }
    return true
};
