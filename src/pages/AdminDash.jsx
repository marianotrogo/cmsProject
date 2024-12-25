import React from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

const AdminDash = () => {
  const {user, loading} = useAuth()
  const navigate = useNavigate()

  if(loading){
    return <div>Loading...</div>
  }
  if(!user){
    navigate('/login')
  }
  return (
    <div>AdminDash {user && user.name}</div>
  )
}

export default AdminDash