// Source : https://leetcode.com/problems/first-bad-version/description/
// Author : Bayarjargal
// Date   : 2024-09-19

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l = 0 
        let r = n 

        while(l<r) {
            let mid = Math.floor((l+r)/2)
            if(isBadVersion(mid)) {
                r = mid 
            } else {
                l = mid + 1 
            }
        }
        return l 
    };
};
