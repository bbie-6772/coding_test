-- 조건에 맞는 도서와 저자 리스트 출력하기
SELECT  b.BOOK_ID
        , a.AUTHOR_NAME
        , DATE_FORMAT(b.PUBLISHED_DATE, "%Y-%m-%d") PUBLISHED_DATE
FROM    BOOK b
    INNER JOIN AUTHOR a
        ON b.AUTHOR_ID = a.AUTHOR_ID
WHERE   b.CATEGORY = '경제'
ORDER BY 3

-- 조건별로 분류하여 주문상태 출력하기
SELECT  ORDER_ID
        , PRODUCT_ID
        , DATE_FORMAT(OUT_DATE,"%Y-%m-%d") OUT_DATE
        , IF(OUT_DATE < DATE("2022-05-02"),"출고완료",IF(OUT_DATE > 0,"출고대기","출고미정")) 출고여부
FROM    FOOD_ORDER
ORDER BY 1

-- 과일로 만든 아이스크림 고르기
SELECT  F.FLAVOR
FROM    FIRST_HALF F
    INNER JOIN ICECREAM_INFO I
        ON  F.FLAVOR = I.FLAVOR
WHERE   F.TOTAl_ORDER > 3000 
        AND I.INGREDIENT_TYPE = "fruit_based"
ORDER BY F.TOTAl_ORDER DESC