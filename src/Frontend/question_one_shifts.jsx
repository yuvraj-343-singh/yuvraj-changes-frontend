import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import '../Frontend/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const QuestionOneShifts = () => {
    const [table, setTable] = useState([])



    const question_one_shifts = "http://localhost:5000/question_one_shifts";



    const question = () => {
        axios.get(question_one_shifts,)
            .then((res) => setTable(res.data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        question();
    }, [])


    return (
        <Fragment>
            <div>
                <table className='table table-striped table-dark'>
                    <thead className='thead-dark'>
                        <tr >
                            <th scope="col">shift_id</th>
                            <th scope="col">facility_id</th>
                            <th scope="col">shift_dates</th>
                            <th scope="col">start_time</th>
                            <th scope="col">start_time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table.map((dataTable, index) => {
                            return (

                                <tr >
                                    <td>{dataTable.shift_id}</td>
                                    <td>{dataTable.facility_id}</td>
                                    <td>{dataTable.shift_date}</td>
                                    <td>{dataTable.start_time}</td>
                                    <td>{dataTable.end_time}</td>
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default QuestionOneShifts