import React, { useState, useEffect } from "react";
import "./Countdown.css";

const Countdown = ({ finishTest }) => {
  const [remainingTime, setRemainingTime] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);
    if (remainingTime === 0) {
      finishTest();
    }
    return () => clearInterval(intervalId);
  }, [remainingTime]);

  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

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
