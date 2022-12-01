import React, { Fragment } from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import './style.css'

const Jobs = () => {

    const [table, setTable] = useState([])
    const jobsApi = "http://localhost:5000/jobs";


    const jobs = () => {
        axios.get(jobsApi,)
            .then((res) => setTable(res.data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        jobs();
    }, [])


  return (
     <Fragment>
         <div>
                <table className='table table-striped table-dark'>
                    <thead className='thead-dark'>
                        <tr >
                            <th scope="col">job_id</th>
                            <th scope="col">facility_id</th>
                            <th scope="col">nurse_type_needed</th>
                            <th scope="col">total_number_nurses_needed</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {table.map((dataTable, index) => {
                            return (

                                <tr >
                                    <td>{dataTable.job_id}</td>
                                    <td>{dataTable.facility_id}</td>
                                    <td>{dataTable.nurse_type_needed}</td>
                                    <td>{dataTable.total_number_nurses_needed}</td>
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>
     </Fragment>
  )
}

export default Jobs