// Source : https://leetcode.com/problems/array-reduce-transformation/
// Author : Bayarjargal
// Date   : 2024-09-06

/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
  let [year, month, day] = date.split('-').map(Number);
  return `${year.toString(2)}-${month.toString(2)}-${day.toString(2)}`;
};