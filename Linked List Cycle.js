// Source : https://leetcode.com/problems/linked-list-cycle/description
// Author : Bayarjargal
// Date   : 2025-07-17

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head
    let fast = head
    
    while(fast != null && fast.next != null) {
        slow = slow.next
        fast = fast.next.next
        if(slow == fast) return true
    }
    return false
};
