// Source : https://leetcode.com/problems/middle-of-the-linked-list/
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
 * @return {ListNode}
 */
var middleNode = function(head) {
    let length = 0 
    let current = head
    while(current !=null) {
        current = current.next
        length++
    }
    current = head
    let mid = Math.floor(length / 2)
    for(let i = 0;  i<mid ; i ++) {
        current = current.next
    }
    return current
};
