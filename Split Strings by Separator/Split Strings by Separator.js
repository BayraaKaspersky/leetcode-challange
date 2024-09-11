// Source : https://leetcode.com/problems/split-strings-by-separator/description/
// Author : Bayarjargal
// Date   : 2024-09-11

/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */

var splitWordsBySeparator = function (words, separator) {
  const result = [];

  for (const word of words) {
    const parts = word.split(separator);
    for (const part of parts) {
      if (part !== "") {
        result.push(part);
      }
    }
  }

  return result;
};
