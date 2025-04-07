# Write your MySQL query statement below
SELECT  DATE(activity_date) AS day
        , COUNT(DISTINCT user_id) as active_users
FROM    Activity
GROUP BY day
HAVING day > DATE_SUB("2019-07-27", INTERVAL 30 DAY) && day <= DATE("2019-07-27")