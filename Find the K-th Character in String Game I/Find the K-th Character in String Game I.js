// Source : https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/
// Author : Bayarjargal
// Date   : 2024-09-29

/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
    let s = "a"
     while (s.length <= k) {
        s += Array.from(s).map(c => (c === 'z' ? 'a' : String.fromCharCode(c.charCodeAt(0) + 1))).join('')
        console.log(s)
    }
    return s[k - 1]
}
