-- Q1. 각 메뉴(item) 별로 총 매출이 10000원 이상인 메뉴만 보여주세요 / 총 매출을 매출이 많은 순서대로 정렬

SELECT  item
        , SUM(sales) as total_sales
FROM    ??
GROUP BY 1
HAVING total_sales >= 10000
ORDER BY 2 DESC

-- Q2. 각 메뉴(item) 별로 총 판매 건수가 2번 이상인 메뉴만 보여주세요 / 판매 건수 내림차순으로 정렬

SELECT  item
        , COUNT(sales) as sales_count
FROM    ??
GROUP BY 1
HAVING sales_count >= 2
ORDER BY 2 DESC


