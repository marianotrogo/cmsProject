import React from 'react'
import {NavLink} from 'react-router-dom'


const AdminSidebar = () => {
  return (
    <div className='bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64'>
        <div className='bg-teal-600 h-12 flex items-center justify-center'>
            <h3 className='text-2xl text-center font-pacific'>Panel</h3>
        </div>
        <div className='px-4'>
            <NavLink to="/admin-dashboard"
            className="flex items-center space-x-4 block py-2.5 px-4 rounded">
                <span>Dashboard</span>
            </NavLink>
            <NavLink to="/admin-dashboard"
                className="flex items-center space-x-4 block py-2.5 px-4 rounded">
                <span>Link 2</span>
            </NavLink>
            <NavLink to="/admin-dashboard"
                className="flex items-center space-x-4 block py-2.5 px-4 rounded">
                <span>Link 3</span>
            </NavLink>
            <NavLink to="/admin-dashboard"
            className="flex items-center space-x-4 block py-2.5 px-4 rounded">
                <span>Link 4</span>
            </NavLink>
        </div>
    </div>
  )
}

export default AdminSidebar