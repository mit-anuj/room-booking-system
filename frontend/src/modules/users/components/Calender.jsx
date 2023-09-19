import React, { useState } from "react";
import { DateCalendar } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Calender = () => {
  const [value, setValue] = useState(dayjs("2022-04-17"));
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Calender;
