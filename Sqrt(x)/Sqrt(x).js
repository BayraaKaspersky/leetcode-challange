// Source : https://leetcode.com/problems/sqrtx/description/
// Author : Bayarjargal
// Date   : 2024-09-12

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x < 2) return x;
  let left = 0 
  let right = x 

  while(left<=right) {
      let mid = Math.floor((left + right) / 2);
      let sqr = mid * mid
      
      if (sqr === x) {
          return mid;
      } else if (sqr < x) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
   
  } 
 return right
};
