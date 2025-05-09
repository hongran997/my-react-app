import { useEffect, useState } from 'react'

export default function Counter({ seconds }: {seconds: number}) {
  const [second, setSecond] = useState(seconds);
  const [time, setTime] = useState({ hour: 0, min: 0, sec: 0 });

  useEffect(() => {
    if (second < 0) {
      return;
    }

    const timer = setInterval(() => {
      if (second <= 0) {
        clearInterval(timer);
        return;
      }

      const hourUnit = 60 * 60, minUnit = 60;
      const hour = Math.floor(second / hourUnit);
      const min = Math.floor((second - hour * hourUnit) / minUnit);
      const sec = second - hour * hourUnit - min * minUnit;
      
      setTime({ hour, min, sec });
      setSecond(prev => prev - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [second]);

  return (
    <div>
      {time.hour} h : {time.min} m : {time.sec} s
    </div>
  );
}