import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import AdminDash from './pages/AdminDash'
import './App.css'
import EmployeDashboard from './pages/EmployeDashboard'
import PrivateRoutes from './utils/PrivateRoutes'
import RoleBaseRoutes from './utils/RoleBaseRoutes'
import AdminSummary from './components/dashboard/AdminSummary'
import DepartmentList from './components/departments/DepartmentList'
import AddDepartment from './components/departments/AddDepartment'
import EditDepartment from './components/departments/EditDepartment'
import List from './components/employee/List'
import Add from './components/employee/Add'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/admin-dashboard' />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/admin-dashboard' element={
          <PrivateRoutes>
            <RoleBaseRoutes requiredRole={["admin"]}>
              <AdminDash />
            </RoleBaseRoutes>
          </PrivateRoutes>
        }>

        <Route index element={<AdminSummary/>}/>
        <Route path='departments'>
          <Route index element={<DepartmentList/>}/>
          <Route path='add' element={<AddDepartment/>}/>
          <Route path=':id' element={<EditDepartment/>}/>
        </Route>
          <Route path='employee' element={<List/>}/>
          <Route path='add-employee' element={<Add/>}/>
        </Route>
        <Route path='/employee-dashboard' element={<EmployeDashboard />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App