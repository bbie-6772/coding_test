# Write your MySQL query statement below
WITH Total AS 
(
SELECT  S.user_id
        , COUNT(COALESCE(C.action,0)) AS total
        , COUNT(IF(C.action = "confirmed",C.action,NULL)) AS confirmed
FROM    Signups S
    LEFT JOIN Confirmations C
        ON S.user_id = C.user_id
GROUP BY S.user_id
)
SELECT  user_id
        , ROUND(confirmed / total,2) AS confirmation_rate
FROM    Total