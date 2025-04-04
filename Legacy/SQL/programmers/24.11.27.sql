-- 오랜 기간 보호한 동물(2)
SELECT  i.ANIMAL_ID
        , i.NAME
FROM    ANIMAL_INS i 
    LEFT JOIN ANIMAL_OUTS o
        ON  i.ANIMAL_ID = o.ANIMAL_ID
ORDER BY o.DATETIME - i.DATETIME DESC LIMIT 2

-- 보호소에서 중성화한 동물
SELECT  i.ANIMAL_ID
        , i.ANIMAL_TYPE
        , i.NAME
FROM    ANIMAL_INS i
    LEFT JOIN ANIMAL_OUTS o
        ON i.ANIMAL_ID = o.ANIMAL_ID
WHERE   i.SEX_UPON_INTAKE LIKE "Intact%" 
        AND i.SEX_UPON_INTAKE <> o.SEX_UPON_OUTCOME
ORDER BY 1