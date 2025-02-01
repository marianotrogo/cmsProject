import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const EditDepartment = () => {
  const { id } = useParams()
  const [department, setDepartment] = useState({})
  const [depLoading, setDepLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()


  useEffect(() => {
    const fetchDepartments = async () => {
      setDepLoading(true)
      try {
        const response = await axios.get(`http://localhost:5000/api/department/${id}`, {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
          }
        });
        console.log(response.data)
        if (response.data.success) {
          setDepartment(response.data.department)
        }
      } catch (error) {
        setError(error.response?.data?.error || "Error fetching department");
        
      } finally {
        setDepLoading(false)
      }
    }
    fetchDepartments()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepartment({ ...department, [name]: value });
  };

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      const response = await axios.put(
          `http://localhost:5000/api/department/${id}`,
            department,  
          {
              headers: {
                  Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
          }
      );

      if (response.data.success) {
          setError('');
          navigate('/admin-dashboard/departments');
      } else {
          setError('Failed to add department.');
      }
  } catch (error) {
          setError(error.response.data.error || 'Something went wrong. Please try again later.');
      }
  }
  

  return (
    <>
     {depLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Edit Department</h3>

          {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="dep_name" className="block text-sm font-medium text-gray-700">
                Department Name
              </label>
              <input
                type="text"
                name="dep_name"
                placeholder="Enter department name"
                value={department.dep_name || ""}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Description"
                value={department.description || ""}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Edit Department
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default EditDepartment