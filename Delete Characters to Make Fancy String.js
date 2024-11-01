// Source : https://leetcode.com/problems/delete-characters-to-make-fancy-string/description
// Author : Bayarjargal
// Date   : 2024-11-01

/**
 * @param {string} s
 * @return {string}
 */
function makeFancyString(s) {
    const arr = []
    for (let char of s) {
        if (arr.length >= 2 && arr[arr.length - 1] === char && arr[arr.length - 2] === char) {
            continue
        }
        arr.push(char)
    }
    return arr.join('')
}
