import React from 'react'
import Calender from '../components/Calender'
import DayBooking from '../components/booking/DayBooking'
import NewBooking from '../components/booking/NewBooking'

function Booking() {
  return (
    <div className='booking-page'>
        <div className='calender'>
            <Calender/>
        </div>
        <div className='all-bookings'>
            <DayBooking/>
        </div>
        <div className="add-new-booking">
            <NewBooking/>
        </div>
    </div>
  )
}

export default Booking