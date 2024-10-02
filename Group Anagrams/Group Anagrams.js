// Source : https://leetcode.com/problems/group-anagrams/description/
// Author : Bayarjargal
// Date   : 2024-09-30

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagramMap = {};

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('')

        if (!anagramMap[sortedStr]) {
            anagramMap[sortedStr] = []
        }
        anagramMap[sortedStr].push(str)
    }
    return Object.values(anagramMap)
};
