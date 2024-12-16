-- 코드를 입력하세요
SELECT  CAR_ID
        , MAX(IF('2022-10-16' BETWEEN START_DATE AND END_DATE, "대여중", "대여 가능")) AVAILABILTY
FROM    CAR_RENTAL_COMPANY_RENTAL_HISTORY
GROUP BY 1
ORDER BY 1 DESC