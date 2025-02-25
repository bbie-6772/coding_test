-- 12세 이하인 여자 환자 목록 출력하기
SELECT  PT_NAME
        , PT_NO
        , GEND_CD
        , AGE
        , COALESCE(TLNO,"NONE")
FROM    PATIENT
WHERE   AGE <= 12 AND GEND_CD = "W"
ORDER BY 4 DESC, 1

-- 인기있는 아이스크림
SELECT  FLAVOR
FROM    FIRST_HALF
ORDER BY TOTAL_ORDER DESC, SHIPMENT_ID

-- 자동차 종류 별 특정 옵션이 포함된 자동차 수 구하기
SELECT  CAR_TYPE
        , COUNT(*) CARS
FROM    CAR_RENTAL_COMPANY_CAR
WHERE   OPTIONS LIKE "%가죽시트%" 
    OR  OPTIONS LIKE "%열선시트%" 
    OR  OPTIONS LIKE "%통풍시트%"
GROUP BY 1
ORDER BY 1
