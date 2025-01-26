import React from 'react'

const SummaryCard = ({text, number, color}) => {
  return (
    <div className='rounded flex bg-white'>
        <div className={`text-3xl flex justify-center items-center ${color} text-white px-4`}>

        </div>
        <div className='pl-4 py-1'>
            <p className='text-lg font-semibold'>{text}</p>
            <p className='text-xl font-bold'>{number}</p>

        </div>
        <div>

        </div>
    </div>
  )
}

export default SummaryCard