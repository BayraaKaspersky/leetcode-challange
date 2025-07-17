// Source : https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/description/
// Author : Bayarjargal
// Date   : 2025-07-17

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let res = ""
    let current = head
    while(current != null) {
        res+=current.val
        current = current.next
       
    }
    return parseInt(res,2)
}
