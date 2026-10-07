import { useState, useEffect } from "react";

export function QuestionTimer({ timeout, onTimeout, mode }) {
  const [timeLeft, setTimeLeft] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);

    return () => clearTimeout(timer);
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 10);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <progress id="question-time" max={timeout} value={timeLeft} className={mode}/>
    </div>
  );
}
