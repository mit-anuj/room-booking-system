import React, { useEffect, useState } from "react";
import { DateCalendar } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Calender = ({ onDaySelect }) => {
  // This initializes the date to the current day.
  const [value, setValue] = useState(dayjs());

  // This gets the date from the current state and formats it and sends it to the parent component.
  useEffect(() => {
    onDaySelect(value.format("DD MMM YYYY"));
  });

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Calender;
