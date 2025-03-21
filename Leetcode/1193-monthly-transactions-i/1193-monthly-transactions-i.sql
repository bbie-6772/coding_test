# Write your MySQL query statement below
SELECT  DATE_FORMAT(trans_date, "%Y-%m") AS month
        , country
        , COUNT(id) AS trans_count
        , COUNT(IF(state = "approved", id, NULL)) AS approved_count
        , SUM(amount) AS trans_total_amount
        , SUM(IF(state = "approved", amount, 0)) AS approved_total_amount
FROM    Transactions
GROUP BY month, country