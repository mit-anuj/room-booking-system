import React from "react";
import styles from "./NewBooking.module.css";

function NewBooking({ selectedDay }) {
  return (
    <div className={`${styles.main}`}>
      <div>
        <h2>Make a booking at {selectedDay}</h2>
      </div>
      <form>
        <div>
          <div className={`${styles.input_grp}`}>
            <label htmlFor="recurring">Recurring (optional)</label>
            <select id="recurring" name="recurring">
              <option value="daily">Daily(weekdays only)</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>

          <div className={`${styles.input_grp}`}>
            <label htmlFor="business">Business Unit</label>
            <select id="business" name="business">
              <option value="bu1">Business Unit 1</option>
              <option value="bu2">Business Unit 2</option>
              <option value="bu3">Business Unit 3</option>
              <option value="bu4">Business Unit 4</option>
              <option value="bu5">Business Unit 5</option>
            </select>
          </div>

          <div className={`${styles.input_grp}`}>
            <label htmlFor="purpose">Select a purpose</label>
            <select id="purpose" name="purpose">
              <option value="adhoc">Adhoc Event</option>
              <option value="class">Class</option>
              <option value="event">Special Event</option>
            </select>
          </div>

          <div className={`${styles.input_grp}`}>
            <label htmlFor="">Description</label>
            <input type="text" />
          </div>

          <div className={`${styles.input_grp}`}>
            <button type="submit">Book</button>
            <button type="submit">Reset</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewBooking;
