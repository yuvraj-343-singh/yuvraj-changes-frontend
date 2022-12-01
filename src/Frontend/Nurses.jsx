import React, { Fragment } from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import './style.css'



const Nurses = () => {


    const [table, setTable] = useState([])
    const hiredNurses = "http://localhost:5000/nurse_hired_jobs";


    const hired = () => {
        axios.get(hiredNurses,)
            .then((res) => setTable(res.data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        hired();
    }, [])






  return (
    <Fragment>
         <div>
                <table className='table table-striped table-dark'>
                    <thead className='thead-dark'>
                        <tr >
                            <th scope="col">job_id</th>
                            <th scope="col">nurse_id</th>
                           
                            
                        </tr>
                    </thead>
                    <tbody>
                        {table.map((dataTable, index) => {
                            return (

                                <tr >
                                    <td>{dataTable.job_id}</td>
                                    <td>{dataTable.nurse_id}</td>
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>
     </Fragment>
  )
}

export default Nurses