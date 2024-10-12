// Source : https://leetcode.com/problems/minimum-string-length-after-removing-substrings/description/
// Author : Bayarjargal
// Date   : 2024-10-07

/**
 * @param {string} s
 * @return {number}
 */
 function minLength(s) {
    const arr = []
    for (let i = 0; i < s.length; i++) {
        const current = s[i]
        if (arr.length > 0) {
            const top = arr[arr.length - 1]
            if ((top === 'A' && current === 'B') || (top === 'C' && current === 'D')) {
                arr.pop()
            } else {
                arr.push(current)
            }
        } else {
            arr.push(current)
        }
    }
    return arr.length
}
