import { useEffect } from "react";
import { useState } from "react";

const Timer = () => {
  const [seconds, setseconds] = useState(60);
  const [isrunning, setIsRunning] = useState(false);

  const initialvalue = 60;

  const updateTimer = () => {
    if (isrunning && seconds > 0) {
      setseconds(seconds - 1);
    }
  };

  useEffect(() => {
    const timerstart = setInterval(updateTimer, 1000);
    return () => clearInterval(timerstart);
  }, [seconds, isrunning]);

  const handleStart = () => {
    setIsRunning(true);
  };
  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setseconds(initialvalue);
  };

  const handleStartonmusehover = () => {
    setIsRunning(true);
  };

  const handlestopmousehover = () => {
    setIsRunning(false);
  };
  return (
    <div>
      <div
        onMouseEnter={handleStartonmusehover}
        onMouseLeave={handlestopmousehover}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
          width: "100px",
          height: "100px",
        }}
      >
        Start
      </div>
      <h1>{seconds}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
export default Timer;
