import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Agenda = () => {
  const [dates, setDates] = useState(new Date());

  return (
    <div>
      <Calendar onChange={setDates} value={dates} />
    </div>
  );
};

export default Agenda;
