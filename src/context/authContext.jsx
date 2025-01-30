import React, { createContext, useContext, useEffect, useState } from "react"
import axios from "axios"


const UserContext = createContext()

const AuthContext = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const verifyUser = async () => {
      const token = localStorage.getItem('token')
      if (token) {

        try {
          const response = await axios.get('http://localhost:5000/api/auth/verify', {
            headers: {
              Authorization: `Bearer ${token}`
            },
          });
          console.log(response);
          

          if (response.data.success) {
            setUser(response.data.user)
          }
        } catch (error) {
          console.log(error);
          setUser(null)
        }finally{
          setLoading(false)
        }
      } else {
        setUser(null)
      }
    }
    verifyUser()
  }, [])

  const login = (user) => {
    setUser(user)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('token')
  }
  return (
    <UserContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </UserContext.Provider>

  )
}


export const useAuth = () => useContext(UserContext)
export default AuthContext