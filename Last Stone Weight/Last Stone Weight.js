// Source : https://leetcode.com/problems/last-stone-weight/description/
// Author : Bayarjargal
// Date   : 2024-10-11

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    stones.sort((a,b) => a-b)
    while(stones.length > 1) {
        let h1 = stones.pop()
        let h2 = stones.pop()
        if(h1 !== h2) {
            stones.push(Math.abs(h1 - h2))
            stones.sort((a,b) => a-b)
        }
    }
    return stones.length === 1 ? stones[0] : 0
};
