// Source : https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-i/description/
// Author : Bayarjargal
// Date   : 2024-09-30

/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function(word, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    const n = word.length
    let count = 0

    for (let i = 0; i < n; i++) {
        const foundVowels = new Set();
        let constraintCount = 0

        for (let j = i; j < n; j++) {
            const c = word[j]

            if (vowels.has(c)) {
                foundVowels.add(c);
            } else {
                constraintCount++
            }

            if (foundVowels.size === 5 && constraintCount === k) {
                count++
            }

            if (constraintCount > k) {
                break
            }
        }
    }
    
    return count
}
