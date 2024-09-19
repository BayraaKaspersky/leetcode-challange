// Source : https://leetcode.com/problems/find-the-key-of-the-numbers/description/
// Author : Bayarjargal
// Date   : 2024-09-19

/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
function generateKey(num1, num2, num3) {
    num1 = num1.toString().padStart(4, '0')
    num2 = num2.toString().padStart(4, '0')
    num3 = num3.toString().padStart(4, '0')
    let arr = []
    
    for (let i = 0; i < 4; i++) {
        let minDigit = Math.min(num1[i], num2[i], num3[i])
        arr.push(minDigit)
    }
    return parseInt(arr.join(''))
}
