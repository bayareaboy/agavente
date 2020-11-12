import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

const Appointment = ({formData, setForm, navigation}) => {
  const { date, timeSlot } = formData;
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className='space-2'>
    <div class="form-group">
 
    <DatePicker value={date} name='date' className='calendar' dateFormat="mm/dd/yyyy" selected={startDate} onChange={date => setStartDate(date)} />

</div>
    </div>
  )
}

export default Appointment