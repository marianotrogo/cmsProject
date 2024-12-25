import React, { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const {login} = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e)=>{
    
    e.preventDefault()
    try{
      const response = await axios.post(
        'http://localhost:5000/api/auth/login', 
        {email,password});
        if(response.data.success){
          login(response.data.user)
          localStorage.setItem('token', response.data.token)
          if(response.data.user.role === 'admin'){
            navigate('/admin-dashboard')
          }else{
            navigate('/employee-dashboard')
          }
        }
        
        
    }catch(error){
          if(error.response && !error.response.data.success)  {
            setError(error.response.data.error)
          }else{
            setError('server error')
          }
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-b from-gray-100 to-gray-300">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Ingresando al Panel de Control</h2>
      <form onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-sm"
      >
        <h2 className="text-xl font-medium mb-6 text-gray-700">Ingrese</h2>
        {error && <p className='text-red-500'>{error}</p>}
        <div className="mb-5">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">Password</label>
          <input
            type="password"
            placeholder="******"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
            onChange={(e)=> setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-indigo-500 rounded"
            />
            <span className="ml-2">Recordar</span>
          </label>
          <a href="#" className="text-indigo-500 hover:underline">Recuperar Contraseña</a>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-600 transition duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300">
          Iniciar Sesión
        </button>
      </form>
    </div>
  )
}

export default Login