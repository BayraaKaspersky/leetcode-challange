// Source : https://leetcode.com/problems/employee-bonus/description/
// Author : Bayarjargal
// Date   : 2024-09-16
 
# Write your MySQL query statement below
SELECT 
    e.name,
    b.bonus
FROM 
    Employee e
LEFT JOIN 
    Bonus b
ON 
    e.empId = b.empId
WHERE 
    b.bonus IS NULL OR b.bonus < 1000;
