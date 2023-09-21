import React, { useState } from "react";
import Calender from "../components/Calender";
import DayBooking from "../components/booking/DayBooking";
import NewBooking from "../components/booking/NewBooking";
import { getTodayDate } from "@mui/x-date-pickers/internals";
import dayjs from "dayjs";

function Booking() {
  const today = dayjs().format("DD MMM YYYY");
  const [selectedDay, setSelectedDay] = useState(today);
  const handleDaySelect = (day) => {
    setSelectedDay(day);
  };
  return (
    <div className="booking-page">
      <div className="calender">
        <Calender onDaySelect={handleDaySelect} />
      </div>
      <div className="all-bookings">
        <DayBooking selectedDay={selectedDay} />
      </div>
      <div className="add-new-booking">
        <NewBooking selectedDay={selectedDay} />
      </div>
    </div>
  );
}

export default Booking;
