import React from 'react'
import SummaryCard from './SummaryCard'

const AdminSummary = () => {
  return (
    <div className='p-6'>
       <h3 className='text-2xl font-bold'>Dashboard Overview</h3> 
       <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
            <SummaryCard  text="Total Employess" number={13} color='bg-teal-600' />
            <SummaryCard  text="Total Departaments" number={5} color='bg-yellow-600'/>
       </div>
    </div>
  )
}

export default AdminSummary