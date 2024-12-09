/* 당신은 도서관의 대여 기록을 관리하는 시스템을 운영하고 있습니다. 
대여 기록이 저장된 BOOK_RENTALS 테이블에서 연체된 책들에 대한 정보를 분석하려고 합니다.  */

/*
각 도서에 대해 연체된 대여 건수를 계산하고 연체 된 도서들만 대상으로 각 책의 평균 연체 일수를 계산하세요.
*/


-- 테이블

CREATE TABLE BOOK_RENTALS
( 
    rental_id  INT PRIMARY KEY AUTO_INCREMENT,
    book_id    INT,
    member_id  INT,
    days_rented  INT,
    due_date  DATE,
    return_date  DATE
); 

INSERT INTO BOOK_RENTALS (book_id, member_id,days_rented,due_date,return_date) 
    VALUES (1001, 201, 10, '2024-01-10','2024-01-20');
INSERT INTO BOOK_RENTALS (book_id, member_id,days_rented,due_date,return_date) 
    VALUES (1002, 202, 5, '2024-01-05','2024-01-04');
INSERT INTO BOOK_RENTALS (book_id, member_id,days_rented,due_date,return_date) 
    VALUES (1003, 203, 8, '2024-01-08','2024-01-15');
INSERT INTO BOOK_RENTALS (book_id, member_id,days_rented,due_date,return_date) 
    VALUES (1001, 204, 7, '2024-01-07','2024-01-06');
INSERT INTO BOOK_RENTALS (book_id, member_id,days_rented,due_date,return_date) 
    VALUES (1002, 205, 12, '2024-01-12','2024-01-15');
INSERT INTO BOOK_RENTALS (book_id, member_id,days_rented,due_date,return_date) 
    VALUES (1003, 206, 15, '2024-01-15','2024-01-25');

-- 구문

SELECT  book_id
        , COUNT(*) as overdue_count
        , FLOOR(AVG(DATEDIFF(return_date, due_date))) as avg_overdue_days
FROM    BOOK_RENTALS
WHERE   DATEDIFF(return_date, due_date) > 0
GROUP BY 1
ORDER BY 1
