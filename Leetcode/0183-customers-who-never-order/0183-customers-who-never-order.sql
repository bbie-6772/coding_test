# Write your MySQL query statement below
SELECT  C.name AS Customers
FROM    Orders O
    RIGHT JOIN Customers C
        ON O.customerId = C.id
WHERE O.customerId IS NULL