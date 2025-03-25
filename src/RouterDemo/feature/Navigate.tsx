import { NavLink } from "react-router-dom"

export default function Navigate() { 
  return (
    <div style={{ display: 'flex', gap: '3rem'  }}>
      <NavLink style={({ isActive }) => ({color: isActive ? 'red': 'black'})} to="/">Home</NavLink>
      <NavLink style={({ isActive }) => ({color: isActive ? 'red': 'black'})} to="/about">About</NavLink>
      <NavLink style={({ isActive }) => ({color: isActive ? 'red': 'black'})} to="/dashboard">Dashboard</NavLink>
    </div>
  )
}