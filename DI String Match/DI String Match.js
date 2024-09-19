// Source : https://leetcode.com/problems/di-string-match/description/
// Author : Bayarjargal
// Date   : 2024-09-18

/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
  let arr = []
  let len = s.length 
  let d = 0
  for(let i=0; i<=s.length;i++) {
    if(s[i] === "I") {
      arr.push(d)
      d++
    } else {
      arr.push(len)
      len--
    }
  } 
  return arr
};
