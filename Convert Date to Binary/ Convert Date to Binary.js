// Source : https://leetcode.com/contest/weekly-contest-414/problems/convert-date-to-binary/
// Author : Bayarjargal
// Date   : 2024-09-08

/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
     let [year, month, day] = date.split('-').map(Number);
     return `${year.toString(2)}-${month.toString(2)}-${day.toString(2)}`;
};
