# Write your MySQL query statement below
WITH first_activity AS (
    SELECT  player_id
            , MIN(event_date) AS first_date
    FROM    Activity
    GROUP BY player_id
)
SELECT  ROUND(SUM(CASE WHEN A.event_date = F.first_date + 1 THEN 1 ELSE 0 END) / COUNT(DISTINCT A.player_id),2) AS fraction
FROM    Activity A
    INNER JOIN first_activity F
        ON A.player_id = F.player_id