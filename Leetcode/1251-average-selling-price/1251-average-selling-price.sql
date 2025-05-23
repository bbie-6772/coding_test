# Write your MySQL query statement below

SELECT  P.product_id
        , COALESCE(ROUND(SUM(P.price * U.units) / SUM(U.units),2),0) AS average_price
FROM    Prices P
    LEFT JOIN UnitsSold U
        ON P.product_id = U.product_id
        AND U.purchase_date >= P.start_date
        AND U.purchase_date <= P.end_date
GROUP BY P.product_id

