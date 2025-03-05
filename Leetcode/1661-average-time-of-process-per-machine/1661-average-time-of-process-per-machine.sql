# Write your MySQL query statement below
SELECT  start_process.machine_id  
        , ROUND(AVG(end_process.timestamp - start_process.timestamp), 3) AS processing_time  
FROM    Activity start_process  
    INNER JOIN Activity end_process  
        ON start_process.process_id = end_process.process_id  
        AND start_process.machine_id = end_process.machine_id  
WHERE   start_process.activity_type = 'start'  
        AND end_process.activity_type = 'end'  
GROUP BY start_process.machine_id;  

        