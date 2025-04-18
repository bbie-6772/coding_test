-- 코드를 입력하세요
WITH RECURSIVE DAY AS
(
SELECT 0 AS HOUR
UNION ALL
SELECT HOUR+1 FROM DAY
WHERE HOUR < 23
)

SELECT  D.HOUR
        , COUNT(A.ANIMAL_ID)
FROM    ANIMAL_OUTS A
    RIGHT JOIN DAY D
        ON HOUR(A.DATETIME) = D.HOUR
GROUP BY HOUR
ORDER BY HOUR