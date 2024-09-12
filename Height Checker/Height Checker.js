// Source : https://leetcode.com/problems/height-checker/description/
// Author : Bayarjargal
// Date   : 2024-09-12

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  let count = 0 
  let arr = [...heights].sort((a,b)=>a-b)
  for(let i=0;i<heights.length ; i++) {
      if(arr[i] != heights[i]) count++
  }
  return count
};
