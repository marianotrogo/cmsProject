import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import AdminDash from './pages/AdminDash'
import './App.css'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/admin-dashboard' />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/admin-dashboard' element={<AdminDash />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App