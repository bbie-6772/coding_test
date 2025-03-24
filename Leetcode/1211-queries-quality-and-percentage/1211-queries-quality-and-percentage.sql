# Write your MySQL query statement below
SELECT  query_name
        , ROUND(AVG(rating/ position),2) AS quality
        , ROUND(COUNT(IF(rating >= 3,null,1)) / COUNT(rating) * 100,2) AS poor_query_percentage
FROM    Queries
GROUP BY query_name