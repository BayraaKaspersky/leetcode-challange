// Source : https://leetcode.com/problems/uncommon-words-from-two-sentences/description
// Author : Bayarjargal
// Date   : 2024-09-17

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
 
var uncommonFromSentences = function(s1, s2) {
    let freq = {}
    let str = s1 + " "+ s2
    for(let i of str.split(" ")) {
      freq[i] = (freq[i] || 0 ) + 1
    }
    
    return Object.entries(freq).filter(([key, value]) => value === 1)
    .map(([key]) => key);

};
