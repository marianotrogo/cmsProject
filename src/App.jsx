import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import AdminDash from './pages/AdminDash'
import './App.css'
import EmployeDashboard from './pages/EmployeDashboard'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/admin-dashboard' />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/admin-dashboard' element={<AdminDash />}></Route>
        <Route path='/employee-dashboard' element={<EmployeDashboard />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App