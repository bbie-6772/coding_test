# Write your MySQL query statement below
SELECT  U.unique_id
        , E.name
FROM    EmployeeUNI U
    RIGHT JOIN Employees E
        ON  U.id = E.ID