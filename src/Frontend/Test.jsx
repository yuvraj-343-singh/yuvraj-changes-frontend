import React from 'react'
import { useState } from 'react';

function Test(props) {
  const [isActive, setIsActive] = useState(false);
  const [alternate, setAlternate] = useState();
  const prop = props.data
  const get = props.get



  // console.log(prop)


  const date = prop?.shift_date?.slice(0, 10)

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
    props.transfer(prop)

  };

  //for time conversion
  const time = prop.start_time;

  const sli = time?.slice(0, 2)
  var hours = sli; // gives the value in 24 hours format
  var AmOrPm = hours >= 12 ? 'pm' : 'am';
  hours = (hours % 12) || 12;
  var minutes = time.slice(2, 5);
  var finalTime = hours + minutes + " " + AmOrPm;

  const endtime = prop.end_time;

  const endsli = endtime?.slice(0, 2)
  var hours = endsli; // gives the value in 24 hours format
  var AmOrPm = hours >= 12 ? 'pm' : 'am';
  hours = (hours % 12) || 12;
  var minutes = endtime.slice(2, 5);
  var end = hours + minutes + " " + AmOrPm;







  return (
    <div className={`box  ${props.boxActive.includes(props.index) ? 'coustom' : ''}`} onClick={() => { props.setBoxActives(props.index); handleClick(prop)  }} >

      <div className='box-child' >
        <p>{get(prop.facility_id)}</p>
        <p>{date}</p>
        <span>{finalTime}</span> - <span>{end}</span>
      </div>

    </div>
  )
}

export default Test