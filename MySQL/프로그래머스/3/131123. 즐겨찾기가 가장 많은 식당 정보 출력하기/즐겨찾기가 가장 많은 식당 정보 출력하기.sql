-- 코드를 입력하세요
WITH RANKING AS (
SELECT  FOOD_TYPE
        , REST_ID
        , REST_NAME
        , FAVORITES
        , RANK() OVER (PARTITION BY FOOD_TYPE ORDER BY FAVORITES DESC) RK
FROM    REST_INFO
GROUP BY 1, 4
) 

SELECT  FOOD_TYPE
        , REST_ID
        , REST_NAME
        , FAVORITES
FROM    RANKING
WHERE   RK = 1
GROUP BY 1
ORDER BY 1 DESC