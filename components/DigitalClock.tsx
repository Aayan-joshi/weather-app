"use client"

import React, { useState, useEffect } from 'react';

function DigitalClock({timezone = 'US/Central'}) {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { timeZone: timezone }).toString());

  useEffect(() => {
    // Update the clock every second
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { timeZone: timezone }).toString());
    }, 1000);

    // Clean up on unmount
    return () => clearInterval(intervalId);
  }, []);


  return (
    <div suppressHydrationWarning>
      {time}
    </div>
  );  
}


export default DigitalClock;
