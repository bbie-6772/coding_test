# Write your MySQL query statement below
WITH UserCount AS (
    SELECT  COUNT(user_id) AS user_count
    FROM    Users
)
SELECT  R.contest_id 
        , ROUND( COUNT(R.user_id) / (SELECT user_count FROM UserCount) * 100,2) AS percentage
FROM    Users U   
    INNER JOIN Register R
        ON U.user_id = R.user_id
GROUP BY R.contest_id
ORDER BY percentage DESC, R.contest_id ASC