// Source : https://leetcode.com/contest/weekly-contest-419/problems/find-x-sum-of-all-k-long-subarrays-i/
// Author : Bayarjargal
// Date   : 2024-10-13

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function(nums, k, x) {
    let subArrCount = nums.length - k + 1
    let result = []

    for (let i = 0; i < subArrCount; i++) {
        let subArr = nums.slice(i, i + k)
        let freq = {}

        for (let num of subArr) {
            freq[num] = (freq[num] || 0) + 1
        }

        let sortedFreq = Object.entries(freq).sort((a, b) => {
            if (b[1] === a[1]) {
                return b[0] - a[0]
            }
            return b[1] - a[1]; 
        });

        let sum = 0
        for (let i = 0; i < Math.min(x, sortedFreq.length); i++) {
            let [value, count] = sortedFreq[i]
            sum += value * count
        }

        result.push(sum)
    }

    return result
};
