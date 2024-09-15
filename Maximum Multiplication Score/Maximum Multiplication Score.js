// Source : https://leetcode.com/problems/maximum-multiplication-score/description/
// Author : Bayarjargal
// Date   : 2024-09-15

/**
 * @param {number[]} a
 * @param {number[]} b
 * @return {number}
 */
var maxScore = function (a, b) {
  const n = b.length;
  const k = a.length;
  const dp = Array.from({ length: k }, () => Array(n).fill(-Infinity));

  dp[0][0] = a[0] * b[0];

  for (let i = 1; i < n; i++) {
    dp[0][i] = Math.max(dp[0][i - 1], a[0] * b[i]);
  }

  for (let j = 1; j < k; j++) {
    for (let i = j; i < n; i++) {
      dp[j][i] = Math.max(dp[j][i - 1], dp[j - 1][i - 1] + a[j] * b[i]);
    }
  }

  return dp[k - 1][n - 1];
};
