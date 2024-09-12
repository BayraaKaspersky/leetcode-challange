// Source : https://leetcode.com/problems/count-the-number-of-consistent-strings/
// Author : Bayarjargal
// Date   : 2024-09-12

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
function countConsistentStrings(allowed, words) {
  let count = 0;

  for (const word of words) {
    let isConsistent = true;

    for (const char of word) {
      if (!allowed.includes(char)) {
        isConsistent = false;
        break;
      }
    }
    if (isConsistent) {
      count++;
    }
  }
  return count;
}
