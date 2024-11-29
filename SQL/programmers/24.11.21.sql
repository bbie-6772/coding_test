-- 경기도에 위치한 식품창고 목록 출력
SELECT  WAREHOUSE_ID
        , WAREHOUSE_NAME
        , ADDRESS
        , COALESCE(FREEZER_YN, 'N') AS FREEZER_YN
FROM    FOOD_WAREHOUSE
WHERE   ADDRESS LIKE "%경기도%"

-- 강원도에 위치한 생산공장 목록 출력
SELECT  FACTORY_ID
        , FACTORY_NAME
        , ADDRESS
FROM    FOOD_FACTORY
WHERE   ADDRESS LIKE "%강원도%"

-- DATETIME에서 DATE로 형 변환
SELECT  ANIMAL_ID
        , NAME
        , DATE_FORMAT(DATE(DATETIME), '%Y-%m-%d') 날짜
FROM    ANIMAL_INS
ORDER BY 1

-- 흉부외과 또는 일반외과 의사 목록 출력하기
SELECT  DR_NAME
        , DR_ID
        , MCDP_CD
        , DATE_FORMAT(DATE(HIRE_YMD), "%Y-%m-%d") HIRE_YMD
FROM    DOCTOR
WHERE   MCDP_CD IN ("CS","GS")
ORDER BY 4 DESC, 1

-- 가격이 제일 비싼 식품의 정보 출력하기
SELECT  *
FROM    FOOD_PRODUCT
WHERE   PRICE = 
(
SELECT  MAX(PRICE)
FROM    FOOD_PRODUCT
)

-- 이름이 없는 동물의 아이디
SELECT  ANIMAL_ID
FROM    ANIMAL_INS
WHERE   NAME IS NULL
ORDER BY 1

-- 조건에 맞는 회원수 구하기
SELECT  COUNT(*) USERS
FROM    USER_INFO
WHERE   DATE_FORMAT(DATE(JOINED),"%Y") = "2021" AND AGE BETWEEN "20" AND "29"

-- 중성화 여부 파악하기
SELECT  ANIMAL_ID
        , NAME
        , IF(SEX_UPON_INTAKE LIKE "Intact%", "X","O") 중성화
FROM    ANIMAL_INS

-- 카테고리 별 상품 개수 구하기
SELECT  SUBSTRING(PRODUCT_CODE, 1, 2) CATEGORY
        , COUNT(*) PRODUCTS
FROM    PRODUCT
GROUP BY 1

-- 고양이와 개는 몇 마리 있을까
SELECT  ANIMAL_TYPE
        , COUNT(*) COUNT
FROM    ANIMAL_INS
GROUP BY 1
ORDER BY 1

-- 입양 시각 구하기(1)
SELECT  DATE_FORMAT(DATETIME,"%H") HOUR
        , COUNT(*) COUNT
FROM    ANIMAL_OUTS
WHERE   DATE_FORMAT(DATETIME,"%H") BETWEEN 9 AND 20
GROUP BY 1
ORDER BY 1