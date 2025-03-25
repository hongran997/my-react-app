import { Navigate, useLocation } from "react-router-dom"

interface ProtectedRouteProp { 
  children: React.ReactNode;
  isAuth: boolean
}

export default function ProtectedRoute({ children, isAuth }: ProtectedRouteProp) { 
  
  const location = useLocation()

  if (!isAuth) {
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
  }
  return children;
}
