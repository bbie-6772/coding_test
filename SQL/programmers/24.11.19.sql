
-- 이름이 있는 동물의 아이디
SELECT  ANIMAL_ID
FROM    ANIMAL_INS
WHERE   NAME <> 'NULL'
ORDER BY 1

-- 역순 정렬
SELECT  NAME
        , DATETIME
FROM    ANIMAL_INS
ORDER BY ANIMAL_ID DESC

-- 중복 제거
SELECT  COUNT(DISTINCT NAME) AS count
FROM    ANIMAL_INS
WHERE   NAME <> 'NULL'

-- 동물의 아이디 이름
SELECT  ANIMAL_ID
        , NAME
FROM    ANIMAL_INS
ORDER BY 1