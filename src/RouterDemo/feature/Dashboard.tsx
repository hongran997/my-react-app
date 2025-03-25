import { useNavigate } from 'react-router-dom';

export default function Dashboard() { 
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/userProfile/zhaohongran')
  }

  return (
    <div>
      Welcome to Dashboard Page!
      <button onClick={handleClick} >去用户信息页</button>
    </div>
  )
}