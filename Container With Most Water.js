// Source : https://leetcode.com/problems/container-with-most-water/
// Author : Bayarjargal
// Date   : 2025-07-01

/**
 * @param {number[]} height
 * @return {number}
 */
let maxArea = function(height) {
    let left = 0;
    let right = height.length -1;
    let maxArea = 0;
    while(left<right){
      let width = right-left;
      let area = width * Math.min(height[left] , height[right]);
      maxArea = Math.max(maxArea , area);
      
      if(height[left] < height[right]) {
        left++;
      } else{
        right--;
      }
    }
    return maxArea;  
};
