import { useLayoutEffect, useState } from 'react'

export default function Counter({ seconds }: {seconds: number}) {
  const [second, setSecond] = useState(seconds);
  const [time, setTime] = useState({ hour: 0, min: 0, sec: 0 });

  useLayoutEffect(() => { 
    if (second < 0) return;
    // 为什么不是按照50ms 更新，而是1s 更新呢?
    // 新定时器会从创建时开始计时，但会保持与原有的1秒间隔同步
    // setInterval 的回调函数会在每次间隔到达时执行，而不是在创建时立即执行
    const timer = setInterval(() => { 
      // if (second < 0) { 
      //   clearInterval(timer);
      //   return;
      // }
      const hour = Math.floor(second / 3600);
      const min = Math.floor((second - hour * 3600) / 60);
      const sec = second - hour * 3600 - min * 60;
      setSecond(prev => prev - 1);
      setTime({hour, min, sec})
    }, 1000)

    return () => { 
      clearInterval(timer);
    }

  }, [second])

  return (
    <div>
      {time.hour} h : {time.min} m : {time.sec} s
    </div>
  );
}