import { useNavigate } from "react-router-dom"
import axios from "axios"

export const columns = [
    {
        name: "S No",
        selector: (row) => row.sno
    },
    {
        name: "Department Name",
        selector: (row) => row.dep_name,
        sortable : true
    },
    {
        name: "Action",
        selector: (row) => row.action
    },
]

export const DepartmentButtons = ({ _id, onDepartmentDelete }) => {
    const navigate = useNavigate()

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm("Estas seguro que deseas eliminar?")
        if (confirmDelete) { 
            try {

                const response = await axios.delete(`http://localhost:5000/api/department/${id}`, {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                });

                if (response.data.success) {
                    alert('departamento eliminado correctamente')
                    onDepartmentDelete(id)
                }else{
                    alert('Error eliminando el departament')
                }
            } catch (error) {
                alert(error.response?.data?.error|| "Error deleting department")

            }
        }
    }
    

    return (
        <div className="flex space-x-3">
            <button className="px-3 py-1 bg-teal-600 text-white"
                onClick={() => navigate(`departments/${_id}`)}>Edit</button>
            <button className="px-3 py-1 bg-red-500 text-white"
                onClick={() => handleDelete(_id)}
            >Delete</button>
        </div>
    )
}