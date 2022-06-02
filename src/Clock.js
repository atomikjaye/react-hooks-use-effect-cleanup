import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return function cleanup() {
      // the works because we change state when we toggle the clock, causing
      // the function to be run again
      console.log("cleaned")
      clearInterval(timerID)
    }
  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;
