import useCountdown from "../Hooks/useCountdown";
export default function TestUseCountDown() { 
  
  const [countdown, formattedRes] = useCountdown(`${new Date().getFullYear()}-12-31 23:59:59`);
  console.log('渲染一次', JSON.stringify(formattedRes));
  
  return (
    <div>
      <p>{`距离${new Date().getFullYear()}-12-31 23:59:59还有${formattedRes.days}天，${formattedRes.hours}小时
      ，${formattedRes.minutes}分钟， ${formattedRes.seconds}秒， ${formattedRes.milliseconds}毫秒`}</p>
    </div>
  )
}