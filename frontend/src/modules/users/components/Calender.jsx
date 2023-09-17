import React, { useState } from 'react'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DateCalendar } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import {AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateRange } from '@mui/x-date-pickers-pro';
const Calender = () => {
    const [value, setValue] = useState(dayjs('2022-04-17'));
    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateRangeCalendar', 'DateRangeCalendar']}></DemoContainer>
                <DemoItem label="Controlled calendar">
                    <DateCalendar
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                    />
                </DemoItem>
                <DemoContainer />
            </LocalizationProvider >
        </div>
    )
}

export default Calender
