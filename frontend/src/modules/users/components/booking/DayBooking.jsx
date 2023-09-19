import React from "react";
import styles from "./DayBooking.module.css";

function DayBooking() {
  return (
    <table className="availibility_table">
      <thead className={`${styles.heading}`}>
        <tr>
          <th colspan="2">25 January, 2018</th>
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
