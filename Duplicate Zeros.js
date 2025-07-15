// Source : https://leetcode.com/problems/duplicate-zeros/
// Author : Bayarjargal
// Date   : 2025-07-15

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let size = arr.length
    let output = []
    for(let i = 0 ; i<arr.length;i++){
        output.push(arr[i])
        if(arr[i] == 0 && output.length < size) {
          output.push(0) 
        }
    }
    
    for (let i = 0; i < size; i++) {
        arr[i] = output[i];
    }
    
};
