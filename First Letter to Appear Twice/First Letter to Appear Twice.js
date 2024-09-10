// Source : https://leetcode.com/problems/first-letter-to-appear-twice/description/
// Author : Bayarjargal
// Date   : 2024-09-10

/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  let set = new Set();
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      return s[i];
    }
    set.add(s[i]);
  }
};
