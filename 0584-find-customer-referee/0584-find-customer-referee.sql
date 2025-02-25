# Write your MySQL query statement below
SELECT  name
FROM    Customer
WHERE   Coalesce(referee_id,0) != 2