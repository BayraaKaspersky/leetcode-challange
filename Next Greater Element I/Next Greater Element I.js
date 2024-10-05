// Source : https://leetcode.com/problems/next-greater-element-i/description
// Author : Bayarjargal
// Date   : 2024-10-03

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let arr = []
    for (let i = 0; i < nums1.length; i++) {
        let found = false
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                for (let k = j + 1; k < nums2.length; k++) {
                    if (nums2[k] > nums2[j]) {
                        arr.push(nums2[k])
                        found = true
                        break
                    }
                }
                if (!found) {
                    arr.push(-1)
                }
                break
            }
        }
    }
    return arr
};
