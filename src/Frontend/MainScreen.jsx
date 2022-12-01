import React, { Fragment } from 'react'
import { useState, useEffect } from 'react';
import '../Frontend/style.css'
import axios from 'axios';
import Test from './Test';

const MainScreen = () => {
    const [table, setTable] = useState([])
    const [facility, setfacility] = useState([])
    const [nursedata, setNurses] = useState([])
    const [jobdata, setJobData] = useState([])
    const [nurseHiredJobs, setNurseHiredJobs] = useState([])


    const [facilityName, setfacilityName] = useState()
    const [DataFromTest, setDataFromTest] = useState({})
    const [arr, setArr] = useState([])
    const [Overlap, setOverlap] = useState(0)
    const [Threshold, setThreshold] = useState([])
    const [ThresholdOverlap, setThresholdOverlap] = useState(0)
    const [exceedOverlap, setExceedOverlap] = useState(null)
    const [testObj, settestObj] = useState([]);
    
    const [boxActive, setBoxActive] = useState([])

















    const question_one_shifts = "http://localhost:5000/question_one_shifts";
    const facilitie = "http://localhost:5000/facilities";
    const nurses = "http://localhost:5000/nurses";
    const JobsDataApi = "http://localhost:5000/jobs";
    const NurseHiredApi = "http://localhost:5000/nurse_hired_jobs"
    const question = () => {
        axios.get(question_one_shifts,)
            .then((res) => setTable(res.data))
            .catch((err) => console.log(err))
    }
    const facilities = () => {
        axios.get(facilitie,)
            .then((res) => setfacility(res.data))
            .catch((err) => console.log(err))
    }
    const nurse = () => {
        axios.get(nurses,)
            .then((res) => setNurses(res.data))
            .catch((err) => console.log(err))
    }
    const Jobs = () => {
        axios.get(JobsDataApi,)
            .then((res) => setJobData(res.data))
            .catch((err) => console.log(err))
    }
    const NUrseHired = () => {
        axios.get(NurseHiredApi,)
            .then((res) => setNurseHiredJobs(res.data))
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        question();
        facilities();
    }, [])

    const getfacultyname = (id) => {
        if (id == 100) {
            return 'Faculty A'
        }
        else if (id == 101) {
            return 'Faculty B'
        } else if (id == 102) {
            return 'Faculty C'
        }
    }


    const fromTest = (data) => {

        if (testObj.some(el => el.ID == data.shift_id)) {

            console.log('includes')
            settestObj(testObj.filter(item => item.ID !== data.shift_id))
            return;
        }

        if (testObj.length < 2) {
            console.log('not included')
            settestObj(dt =>
                [...dt, {
                    ID: data.shift_id,
                    Stime: data.start_time,
                    Etime: data.end_time
                }]

            );
        }


        if (arr.length <= 2) {
            setArr(oldArray => [...oldArray, data.start_time, data.end_time]);



        }
        setThreshold(old => [...old, data.facility_id]);


    }

    useEffect(() => {
        console.log(testObj)
    }, [testObj])


    function SubmitValues() {
        if (testObj.length == 2) {
            console.log(testObj)
            var hour = testObj[0].Etime.split(":")[0]
            var hourTwo = testObj[1].Stime.split(":")[0]

            // var finalhour = hour[0];

            var minut = testObj[0].Etime.split(":")[1]

            // var finalhourTwo = hourTwo[0];

            var minutTwo = testObj[1].Etime.split(":")[1]



            if (hour - hourTwo == 0) {
                var Overlap = ` ${minut - minutTwo}`
                setOverlap(Overlap)
                arr.length = 0
                setBoxActive([])
                setArr([])
                settestObj([])
                setThreshold([])
            } else {
                var Overlap = ` ${hour - hourTwo} : ${minut - minutTwo}`
                setOverlap(Overlap)
                arr.length = 0
                setBoxActive([])
                setArr([])
                settestObj([])
                setThreshold([])

            }



        } else {
            alert('you must select two records')
        }
        if (Threshold[0] != Threshold[1]) {

            setThresholdOverlap(0);
        }
        else if (Threshold[0] == Threshold[1]) {
            setThresholdOverlap(30);
        }

        if (ThresholdOverlap == 30) {
            setExceedOverlap("true")
        }
        else {
            setExceedOverlap("false")
        }
    }

    const QueryfourNUrse = () => {
        nurse();
    }
    const QueryfourJobs = () => {
        Jobs();

    }
    const QueryforNursHired = () => {
        NUrseHired();
    }
    console.log("Nursedata ", nursedata)
    console.log("JobsData ", jobdata)
    console.log("NurseHiredforJobs ", nurseHiredJobs)

    return (
        <Fragment>
            <div className='container'>
                <div className='container header d-md-flex justify-content-between align-items-center'>
                    <div >
                        <p> Overlap Minutes :{Overlap}</p>
                        <p> Max Overlap Threshold : {ThresholdOverlap}</p>
                        <p> Exceeds Overlap Threshold :{exceedOverlap}</p>

                    </div>
                    <div>

                        <button onClick={SubmitValues}>Submit</button>
                    </div>
                </div>

                <div className={`container  box-container`}  >

                    {table.map((dataTable, index) => {
                        return (

                            <Test
                                key={index}
                                data={dataTable}
                                get={getfacultyname}
                                transfer={fromTest}
                                index={index}
                                boxActive={boxActive}
                                setBoxActives={
                                    (e) => {
                                        if (boxActive.includes(e)) {
                                            setBoxActive(boxActive.filter(item => item !== e))
                                            return;
                                        }
                                        if (boxActive.length < 2) {
                                            setBoxActive(prev => [...prev, e])

                                        }
                                    }
                                }
                            />

                        )
                    })}

                </div>
                <div className='buttonCOntainer'>
                    <button onClick={QueryfourNUrse}>Execute Q4 Query</button>
                    <button onClick={QueryfourJobs}>Execute Q5 Query</button>
                    <button onClick={QueryforNursHired}>Execute Q6 Query</button>
                </div>
            </div>
        </Fragment>
    )
}

export default MainScreen