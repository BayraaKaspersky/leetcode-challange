// Source : https://leetcode.com/problems/count-common-words-with-one-occurrence/description/
// Author : Bayarjargal
// Date   : 2024-09-17

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
  const freq1 = {};
  const freq2 = {};
  let count = 0;

  words1.forEach(word => freq1[word] = (freq1[word] || 0) + 1);
  words2.forEach(word => freq2[word] = (freq2[word] || 0) + 1);

  for (const word in freq1) {
    if (freq1[word] === 1 && freq2[word] === 1) {
      count++;
    }
  }

  return count;
};
