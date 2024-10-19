import { useEffect, useState } from "react";

const Timer = () => {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
  
    const now = new Date();
    const yr = now.getFullYear();
    const synergyDate = `11/8/${yr}`; // mm/dd/yy format
    const countDown = new Date(synergyDate).getTime();
  
    const [timeLeft, setTimeLeft] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  
    const [showCountdown, setShowCountdown] = useState(true);
  
    useEffect(() => {
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDown - now;
  
        setTimeLeft({
          days: Math.floor(distance / day),
          hours: Math.floor((distance % day) / hour),
          minutes: Math.floor((distance % hour) / minute),
          seconds: Math.floor((distance % minute) / second),
        });
  
        if (distance < 0) {
          clearInterval(interval);
          setShowCountdown(false); 
        }
        if (distance > 0) {
          setShowCountdown(true); 
        }
      }, second);
  
      return () => clearInterval(interval);
    }, [countDown]);
  
    return (
      <div className="counter-container">
        {showCountdown ? (
          <div className="bg-red1 text-white flexCenter gap-2 md:gap-3 heading2 p-2 lg:p-4">
            <div className="flexCenter flex-col">
                <div>{timeLeft.days}</div>
                <div className="text-xs">Days</div>
            </div>
            <div className="flexCenter flex-col">
                <div>{timeLeft.hours}</div>
                <div className="text-xs">Hours</div>
            </div>
            <div className="flexCenter flex-col">
                <div>{timeLeft.minutes}</div>
                <div className="text-xs">Minutes</div>
            </div>
            <div className="flexCenter flex-col">
                <div>{timeLeft.seconds}</div>
                <div className="text-xs">Seconds</div>
            </div>
          </div>
        ) : null}
      </div>
    );
  };
  
export default Timer;