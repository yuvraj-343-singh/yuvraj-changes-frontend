SELECT * FROM question_one_shifts;
SELECT * FROM facilities;
SELECT * FROM jobs;
SELECT * FROM nurses;
SELECT * FROM nurse_hired_jobs;


/*4th point*/

SELECT 
      nurse_id, 
      'not in nurse_hired_jobs' AS note
       FROM nurses
     
EXCEPT
      SELECT nurse_id,
     'not in nurse_hired_jobs' AS note 
      from nurse_hired_jobs
    ORDER BY 
       nurse_id ASC;

/*5th point*/

SELECT  nurses.nurse_id,nurse_name ,
 nurse_type,
  total_number_nurses_needed - 1 AS total_number_nurses_needed 
   FROM jobs
JOIN nurse_hired_jobs ON jobs.job_id = nurse_hired_jobs.job_id
JOIN nurses ON nurses.nurse_id = nurse_hired_jobs.nurse_id
    ORDER BY 
       nurse_id ASC;





-- SELECT  
--      nurses.nurse_id, 
--      nurses.nurse_name,
--      nurses.nurse_type,
--     jobs.total_number_nurses_needed FROM jobs
-- LEFT JOIN nurses ON nurses.nurse_type = jobs.nurse_type_needed

-- ORDER BY 
--        nurse_id ASC;
         

/*6th point*/
SELECT nurse_name,facility_name
FROM nurses
	JOIN nurse_hired_jobs ON nurses.nurse_id = nurse_hired_jobs.nurse_id
	JOIN jobs ON jobs.job_id = nurse_hired_jobs.job_id
	JOIN facilities ON facilities.facility_id = jobs.facility_id
	WHERE facility_name = (
	SELECT facility_name
  FROM nurses
	JOIN nurse_hired_jobs ON nurses.nurse_id = nurse_hired_jobs.nurse_id
	JOIN jobs ON jobs.job_id = nurse_hired_jobs.job_id
	JOIN facilities ON facilities.facility_id = jobs.facility_id
  WHERE nurses.nurse_name = 'Anne'
  LIMIT 1
);

