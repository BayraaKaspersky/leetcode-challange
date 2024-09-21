// Source : https://leetcode.com/problems/group-by/description/
// Author : Bayarjargal
// Date   : 2024-09-20

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let arr = this;
    let groupedObj = {};
    for(let i = 0; i<arr.length; i++){
        let key = fn(arr[i]);   
        groupedObj[key] ? groupedObj[key].push(arr[i]) :  groupedObj[key] = [arr[i]];
    }
    return groupedObj;
};
