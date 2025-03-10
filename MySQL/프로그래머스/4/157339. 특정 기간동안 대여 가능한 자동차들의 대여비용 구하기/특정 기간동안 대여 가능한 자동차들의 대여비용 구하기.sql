-- 코드를 입력하세요
WITH EXE_DATE_CAR_ID AS (
    SELECT  CAR_ID
    FROM    CAR_RENTAL_COMPANY_RENTAL_HISTORY
    WHERE   END_DATE >= "2022-11-01" 
            AND START_DATE <= "2022-11-30"
    GROUP BY 1
), DISCOUNT_CAR_TYPE AS (
    SELECT  CAR_TYPE
            , DISCOUNT_RATE
    FROM    CAR_RENTAL_COMPANY_DISCOUNT_PLAN
    WHERE   SUBSTRING(DURATION_TYPE, 1 , LOCATE("일",DURATION_TYPE) - 1) = "30"
), CALCUATE_FEE AS (
    SELECT  C.CAR_ID
            , FLOOR(C.DAILY_FEE * 30 * (100 - P.DISCOUNT_RATE) /100) AS FEE
    FROM    CAR_RENTAL_COMPANY_CAR C 
        INNER JOIN DISCOUNT_CAR_TYPE P
            ON C.CAR_TYPE = P.CAR_TYPE
)
SELECT  C.CAR_ID
        , C.CAR_TYPE
        , P.FEE
FROM    CAR_RENTAL_COMPANY_CAR C 
    INNER JOIN CALCUATE_FEE P
        ON C.CAR_ID = P.CAR_ID
    LEFT OUTER JOIN EXE_DATE_CAR_ID D
        ON C.CAR_ID = D.CAR_ID   
WHERE   D.CAR_ID IS NULL
        AND P.FEE >= 500000
        AND P.FEE < 2000000
        AND C.CAR_TYPE IN ("SUV","세단")
ORDER BY FEE DESC
        , CAR_TYPE ASC
        , CAR_ID DESC
