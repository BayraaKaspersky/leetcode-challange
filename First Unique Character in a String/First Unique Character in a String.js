// Source : https://leetcode.com/problems/first-unique-character-in-a-string/description/
// Author : Bayarjargal
// Date   : 2024-09-10

/**
 * @param {string}
 * @return {number}
 */
var firstUniqChar = function (s) {
  let freq = {};
  for (let i of s) {
    freq[i] = (freq[i] || 0) + 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]] === 1) return i;
  }

  return -1;
};
