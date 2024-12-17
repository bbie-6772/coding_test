-- 코드를 입력하세요
SELECT  i.REST_ID
        , i.REST_NAME
        , i.FOOD_TYPE
        , i.FAVORITES
        , i.ADDRESS
        , ROUND(AVG(r.REVIEW_SCORE),2) SCORE
FROM    REST_INFO i
    INNER JOIN  REST_REVIEW r
        ON  i.REST_ID = r.REST_ID
WHERE   i.ADDRESS LIKE "서울%"
GROUP BY 1,2,3,4,5
ORDER BY 6 DESC, 4 DESC
        