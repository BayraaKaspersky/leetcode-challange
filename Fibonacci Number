// Source : https://leetcode.com/problems/fibonacci-number/description/
// Author : Bayarjargal
// Date   : 2024-09-12

/**
 * @param {number} n
 * @return {number}
 */

var fib = function(n) {
  if(n == 1 ) return 1 
  const dp = new Array(n+1)
  dp[0] = 0 
  dp[1] = 1 
  
  for(let i = 2 ; i<=n ; i++) {
   dp[i] = dp[i-1] + dp[i-2]
  }
  return dp[n]
};
