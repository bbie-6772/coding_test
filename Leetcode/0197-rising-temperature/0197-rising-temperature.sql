# Write your MySQL query statement below
With Compare as (
SELECT  id
        , temperature AS temp
        , recordDate
        , LAG(temperature) OVER(ORDER BY recordDate) AS temp_prev
        , LAG(recordDate) OVER(ORDER BY recordDate) AS date_prev
FROM    Weather
)
SELECT  id as Id
FROM    Compare
WHERE   temp > temp_prev 
        AND DATEDIFF(recordDate, date_prev) = 1