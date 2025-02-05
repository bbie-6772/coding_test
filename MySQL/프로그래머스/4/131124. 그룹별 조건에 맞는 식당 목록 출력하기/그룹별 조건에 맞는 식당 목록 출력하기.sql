-- 코드를 입력하세요

# [1] 가장 많은 리뷰 수 찾기 
WITH REVIEWR_COUNTS AS
(
    SELECT  M.MEMBER_ID
            , COUNT(*) AS review_count
            , MAX(COUNT(*)) OVER () AS max_review_count
    FROM    MEMBER_PROFILE M
        INNER JOIN REST_REVIEW R
            ON M.MEMBER_ID = R.MEMBER_ID
    GROUP BY M.MEMBER_ID
), BEST_REVIER AS
(
    SELECT  MEMBER_ID
    FROM    REVIEWR_COUNTS
    WHERE   review_count = max_review_count
)
# [2] 이름 / 리뷰 / 작성일 출력되게 하기
SELECT  M.MEMBER_NAME
        , R.REVIEW_TEXT
        , DATE_FORMAT(R.REVIEW_DATE, "%Y-%m-%d") as REVIEW_DATE
FROM    MEMBER_PROFILE M
    INNER JOIN REST_REVIEW R
        ON M.MEMBER_ID = R.MEMBER_ID
    INNER JOIN BEST_REVIER B
        ON M.MEMBER_ID = B.MEMBER_ID
# [3] 작성일 기준 오름차순, 리뷰 기준 오름차순 정렬
ORDER BY REVIEW_DATE, REVIEW_TEXT
