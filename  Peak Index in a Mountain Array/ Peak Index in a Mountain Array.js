// Source : https://leetcode.com/problems/peak-index-in-a-mountain-array/description/
// Author : Bayarjargal
// Date   : 2024-09-10

/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] < arr[mid + 1]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return l;
};
