import { useState, useEffect } from 'react';

interface FormattedRes { 
  days: number,
  hours: number,
  minutes: number, 
  seconds: number,
  milliseconds: number,
}

export default function useCountdown(targetDate: string): [number, FormattedRes] {
  
  const [countdown, setCountdown] = useState<number>(0);
  const [formattedRes, setFormattedRes] = useState<FormattedRes>({
    days: 0, hours: 0, minutes: 0, seconds: 0, milliseconds: 0
  });

  useEffect(() => { 
    setCountdown(Math.max(new Date(targetDate).getTime() - Date.now(), 0));
    let timer = setInterval(() => {
      setCountdown(Math.max(new Date(targetDate).getTime() - Date.now(), 0))
    }, 1000);
    return () => { 
      clearInterval(timer);
    }
  }, [targetDate])


  useEffect(() => { 
    const sUnit = 1000, mUnit = 60 * sUnit, hUnit = 60 * mUnit, dUnit = 24 * hUnit;
    let days = Math.trunc(countdown / dUnit);
    let hours = Math.trunc((countdown - days * dUnit) / hUnit);
    let minutes = Math.trunc((countdown - days * dUnit - hours * hUnit) / mUnit);
    let seconds = Math.trunc((countdown - days * dUnit - hours * hUnit - minutes * mUnit) / sUnit);
    let milliseconds = Math.trunc(countdown - days * dUnit - hours * hUnit - minutes * mUnit - seconds * sUnit);
    setFormattedRes({days, hours: hours, minutes, seconds, milliseconds})
  }, [countdown]);
  
  return [countdown, formattedRes]
}