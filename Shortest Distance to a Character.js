// Source : https://leetcode.com/problems/shortest-distance-to-a-character/description/
// Author : Bayarjargal
// Date   : 2024-10-23

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
function shortestToChar(s, c) {
    const n = s.length
    const result = new Array(n)
    const arr = []

    for (let i = 0; i < n; i++) {
        if (s[i] === c) {
            arr.push(i)
        }
    }

    for (let i = 0; i < n; i++) {
        let minDist = Infinity
        for (const pos of arr) {
            minDist = Math.min(minDist, Math.abs(i - pos))
        }
        result[i] = minDist
    }

    return result
}
