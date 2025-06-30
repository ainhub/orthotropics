"use client";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface CalendarProps {
  classNames?: string;
  updateDay: (value: Value) => void;
}

const CalendarComponent = ({ classNames, updateDay }: CalendarProps) => {
  const handleDayChange = (day: Value) => {
    updateDay(day);
  };

  return (
    <Calendar
      className={`custom-calendar ${classNames}`}
      onClickDay={handleDayChange}
    />
  );
};

export default CalendarComponent;
