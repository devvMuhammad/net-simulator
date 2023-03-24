/*eslint-disable react-hooks/exhaustive-deps*/
import React, { useState, useEffect } from "react";
import "./Timer.css";

const Countdown = ({ finishTest }) => {
  const [remainingTime, setRemainingTime] = useState(4500);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);
    if (remainingTime === 0) {
      finishTest();
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [remainingTime]);

  const hours = Math.floor(remainingTime / 3600)
    .toString()
    .padStart(2, "0"); // add leading zero to single digit hours
  const minutes = Math.floor((remainingTime % 3600) / 60)
    .toString()
    .padStart(2, "0"); // add leading zero to single digit minutes
  const seconds = (remainingTime % 60).toString().padStart(2, "0"); // add leading zero to single digit seconds

  return (
    <div className="countdown-container">
      <div className="countdown-box">
        <div className="countdown-number">{hours}</div>
      </div>
      <div className="countdown-separator">:</div>
      <div className="countdown-box">
        <div className="countdown-number">{minutes}</div>
      </div>
      <div className="countdown-separator">:</div>
      <div className="countdown-box">
        <div className="countdown-number">{seconds}</div>
      </div>
    </div>
  );
};

export default Countdown;
