-- 카테고리 별 도서 판매량 집계하기
SELECT  b.CATEGORY
        , SUM(s.SALES) TOTAL_SALES
FROM    BOOK b
    LEFT JOIN BOOK_SALES s
        ON  b.BOOK_ID = s.BOOK_ID
WHERE   DATE_FORMAT(DATE(s.SALES_DATE),"%Y-%m") = "2022-01"
GROUP BY 1
ORDER BY 1

-- 상품 별 오프라인 매출 구하기
SELECT  p.PRODUCT_CODE
        , SUM(p.PRICE * o.SALES_AMOUNT) SALES
FROM    PRODUCT p
    LEFT JOIN   OFFLINE_SALE o
        ON  p.PRODUCT_ID = o.PRODUCT_ID
GROUP BY 1
ORDER BY 2 DESC, 1

-- 있었는데요 없었습니다 / 실수로 보호 시작일보다 입양일이 더 빠르게 된 동물의 아이디와 이름 
SELECT  i.ANIMAL_ID
        , i.NAME
FROM    ANIMAL_INS i
    LEFT JOIN ANIMAL_OUTS o
        ON i.ANIMAL_ID = o.ANIMAL_ID
WHERE   i.DATETIME > o.DATETIME
ORDER BY i.DATETIME