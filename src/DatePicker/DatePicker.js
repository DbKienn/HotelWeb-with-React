import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./DatePicker.css";
function DateRangeEx() {
  const [showPicker, setShowPicker] = useState(false);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSelect = (ranges) => {
    setDateRange(ranges.selection);
    setShowPicker(false);
  };

  return (
    <div>
      <input
        className="date-range"
        type="text"
        onClick={() => setShowPicker(!showPicker)}
        value={`${dateRange.startDate.toDateString()} - ${dateRange.endDate.toDateString()}`}
      />
      {showPicker && (
        <DateRange
          ranges={[dateRange]}
          onChange={handleSelect}
          rangeColors={["#7BDCB5"]}
        />
      )}
    </div>
  );
}

export default DateRangeEx;
