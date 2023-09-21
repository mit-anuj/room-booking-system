import React from "react";
import styles from "./DayBooking.module.css";

function DayBooking({ selectedDay }) {
  return (
    <table className="availibility_table">
      <thead className={`${styles.heading}`}>
        <tr>
          <th colSpan="2">{selectedDay}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>8 AM</td>
          <td>Available</td>
        </tr>
      </tbody>
    </table>
  );
}

export default DayBooking;
