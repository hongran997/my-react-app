import { useNavigate, useLocation } from "react-router-dom"

export default function Login({ login }) {

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';
  console.log('location', location);

  const handleLogin = () => { 
    login()
    navigate(from, {replace: true})
  }

  return (
    <button onClick={handleLogin}>请登录</button>
  )
}