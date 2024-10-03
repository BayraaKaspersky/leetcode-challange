// Source : https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/description/
// Author : Bayarjargal
// Date   : 2024-10-03

/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    const wordToNumber = (word) => {
        return word.split('').reduce((num, char) => num * 10 + (char.charCodeAt(0) - 'a'.charCodeAt(0)), 0)
    }
    return wordToNumber(firstWord) + wordToNumber(secondWord) === wordToNumber(targetWord)
}
