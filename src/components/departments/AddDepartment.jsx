import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddDepartment = () => {
    const [department, setDepartment] = useState({
        dep_name: '',
        description: ''

    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDepartment({...department, [name] : value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
            const response = await axios.post('http://localhost:5000/api/department/add', department,{
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }

            })
            if(response.data.success){
                navigate("/admin-dash/departments")
            }
        }catch(error){
            if(error.response && !error.response.data.error){
                alert(error.response.data.error)
            }
        }
    }
    return (
        <div>
            <div>
                <h3>Add Department</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="dep_name">Department Name</label>
                        <input type="text" placeholder='Enter dep name' onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <textarea name="description" placeholder='Description' onChange={handleChange}></textarea>
                    </div>
                    <button>Add Department</button>
                </form>
            </div>
        </div>
    )
}

export default AddDepartment