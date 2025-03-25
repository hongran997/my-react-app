import { useParams } from 'react-router-dom';

export default function UserProfile() { 
  const {username} = useParams();
  
  return (
    <div> I am profile page with { username  }</div>
  )
}