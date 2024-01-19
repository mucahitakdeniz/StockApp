import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

const LiveClock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
  
    const updateClock = () => {
      setCurrentTime(new Date());
    };
  
    useEffect(() => {
      const intervalId = setInterval(updateClock, 1000)
  
      return () => clearInterval(intervalId);
    }, [])
    return (
      <div >
        <Typography variant="h4" margin="8px" color="white">{currentTime.toLocaleTimeString()}</Typography>
      </div>
    );
  } 
export default LiveClock;
  