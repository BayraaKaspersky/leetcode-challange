// Source : https://leetcode.com/problems/palindrome-number/description/
// Author : Bayarjargal
// Date   : 2024-09-25

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var rem, temp, final = 0;
      temp = x;
      while(x>0)
      {
          rem = x%10;
          x = parseInt(x/10);
          final = final*10+rem;
      }
      if(final==temp) return true
      return false
			
};
