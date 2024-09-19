// Source : https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/description/
// Author : Bayarjargal
// Date   : 2024-09-19

/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    let arr = []
    for (let i = 0; i < words.length; i++) {
        let sorted = words[i].split("").sort().join("");
        if (arr.length === 0 || sorted !== arr[arr.length - 1].split("").sort().join("")) {
            arr.push(words[i])
        }
    }

    return arr
};
