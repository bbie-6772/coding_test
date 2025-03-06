# Write your MySQL query statement below
WITH Student_with_subject AS(
    SELECT  student_id
            , student_name
            , subject_name
    FROM    Students
        CROSS JOIN Subjects
)
SELECT  S.student_id
        , S.student_name
        , S.subject_name
        , COUNT(E.subject_name) AS attended_exams
FROM    Student_with_subject S
    LEFT JOIN    Examinations E
        ON  S.student_id = E.student_id AND S.subject_name = E.subject_name
GROUP BY S.student_id, S.subject_name
ORDER BY S.student_id, S.subject_name


