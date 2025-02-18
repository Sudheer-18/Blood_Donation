import React, { useState, useEffect } from "react";
import { NumberTicker } from "./NumberTicker"; // Adjust path accordingly
import './mui.css'

const App1 = () => {
  const [value, setValue] = useState(0); // Initialize with a default value

  useEffect(() => {
    // Simulating an async fetch
    setTimeout(() => {
      setValue(2000); // Set the value after 1 second
    }, 1000);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Number Ticker Example</h1>
      <NumberTicker 
        value={value} 
        direction="up" 
        delay={0.5} 
        decimalPlaces={0} 
        className="my-ticker" 
        
      />
    </div>
  );
};

export default App1;
