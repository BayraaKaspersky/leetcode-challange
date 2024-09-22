// Source : https://leetcode.com/problems/report-spam-message/description/
// Author : Bayarjargal
// Date   : 2024-09-22


/**
 * @param {string[]} message
 * @param {string[]} bannedWords
 * @return {boolean}
 */
var reportSpam = function(message, bannedWords) {
    let count = 0 
    let set = new Set(bannedWords)
    for(let i of message) {
        if (set.has(i)) {
            count++
            if (count >= 2) return true
        }
    }
    return false
};
