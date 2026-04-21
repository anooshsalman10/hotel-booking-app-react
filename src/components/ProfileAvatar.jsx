import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './Firebase.jsx'; // adjust 

const ProfileAvatar = () => {
  const navigate = useNavigate()
  const user = auth.currentUser

  return (
    <div 
      onClick={() => navigate('/profile')} 
      className='cursor-pointer'
    >
      <img
        src={user?.photoURL || "/logo2.png"}
        alt="user"
        className='h-9 w-9 rounded-full object-cover'
      />
    </div>
  )
}

export default ProfileAvatar