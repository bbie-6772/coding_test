-- 코드를 입력하세요
SELECT  A.APNT_NO
        , P.PT_NAME
        , P.PT_NO
        , A.MCDP_CD
        , D.DR_NAME
        , A.APNT_YMD
FROM    APPOINTMENT A
    INNER JOIN PATIENT P
        ON A.PT_NO = P.PT_NO
    INNER JOIN DOCTOR D
        ON A.MDDR_ID = D.DR_ID
WHERE   DATE_FORMAT(A.APNT_YMD,"%Y-%m-%d") = "2022-04-13"
        AND A.MCDP_CD = "CS"
        AND A.APNT_CNCL_YN = "N"
ORDER BY 6