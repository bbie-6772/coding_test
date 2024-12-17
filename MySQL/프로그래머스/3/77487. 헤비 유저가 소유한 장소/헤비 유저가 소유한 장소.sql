-- 코드를 입력하세요
WITH CNT AS (
SELECT  *
        ,COUNT(HOST_ID) OVER(PARTITION BY HOST_ID) key_num
FROM    PLACES
)
SELECT  ID
        , NAME
        , HOST_ID
FROM CNT
WHERE   key_num > 1
ORDER BY 1