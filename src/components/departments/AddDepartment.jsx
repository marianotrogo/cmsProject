import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddDepartment = () => {
    const [department, setDepartment] = useState({
        dep_name: '',
        description: '',
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDepartment({ ...department, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación de campos vacíos
        if (!department.dep_name || !department.description) {
            setError('All fields are required.');
            return;
        }

        try {
            const response = await axios.post(
                'http://localhost:5000/api/department/add',{
                    depname: department.dep_name,
                    department,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            );

            if (response.data.success) {
                setError(''); // Limpiar errores
                navigate('/admin-dashboard/departments');
            } else {
                setError('Failed to add department.');
            }
        } catch (error) {
            if (error.response && error.response.data.error) {
                setError(error.response.data.error);
            } else {
                setError('Something went wrong. Please try again later.');
            }
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Add Department</h3>

            {error && (
                <div className="mb-4 text-red-500 text-sm">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        htmlFor="dep_name"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Department Name
                    </label>
                    <input
                        type="text"
                        name="dep_name"
                        placeholder="Enter department name"
                        value={department.dep_name}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Description
                    </label>
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={department.description}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Add Department
                </button>
            </form>
        </div>
    );
};

export default AddDepartment;