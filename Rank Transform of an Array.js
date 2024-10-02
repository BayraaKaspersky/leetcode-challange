// Source : https://leetcode.com/problems/rank-transform-of-an-array/description/
// Author : Bayarjargal
// Date   : 2024-10-02

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let tempArr = [...new Set(arr)].sort((a,b)=> a-b) 
    let rank = new Map()
    let result = []
    for(let i = 0 ;  i < tempArr.length ; i++ ) {
        rank.set(tempArr[i] , i+1)
    }
    for(let i = 0 ; i<arr.length ; i ++) {
        result.push(rank.get(arr[i]))
    }
    return result
};
