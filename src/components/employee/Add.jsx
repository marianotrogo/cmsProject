import React, { useEffect, useState } from 'react'
import { fetchDepartments } from '../../utils/EmployeeHelper'

const Add = () => {

  const [departments, setDepartments] = useState([])
  const [formData, setFormData] = useState({})
  useEffect(() => {
    const getDepartments = async () => {
      const departments = await fetchDepartments()
      setDepartments(departments)
    }
    getDepartments();
  }, [])

  const handleChange = (e) => {
    const { name, value, files } = e.targer
    if (name === "image") {
      setFormData((prevData) => ({ ...prevData, [name]: files[0] }))
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formDataObj = new FormData()
    Object.keys(formData).forEach((key)=>{
      formDataObj.append(key, formData[key])
    });

    try {
      const response = await axios.post(
        'http://localhost:5000/api/employee/add',
       formDataObj,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type" : "multipart/form-data",
          },
        }
      );
      if (response.data.success) {
        navigate("/admin-dashboard/employees");
      }
    }catch(error){
      console.log("Error al enviar el formulario", error);
      
    }
      
    }

  return (
    <div className='max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md'>
      <h2 className='text-2xl font-bold mb-6'>Agregue nuevo empleado</h2>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {/* {name} */}

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Name
            </label>
            <input type="text"
              name='name'
              onChange={handleChange}
              placeholder='Nombre'
              className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
              required />
          </div>

          {/* {Email} */}
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input type="email"
              name='email'
              onChange={handleChange}
              placeholder='Email'
              className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
              required />
          </div>

          {/* {Employee ID} */}
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              DNI
            </label>
            <input type="text"
              name='employeeId'
              onChange={handleChange}
              placeholder='DNI'
              className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
              required />
          </div>

          {/* {Fecha de nacimiento} */}
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Fecha de nacimiento
            </label>
            <input type="date"
              name='fdn'
              onChange={handleChange}
              placeholder='Fecha de Nacimiento'
              className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
              required />
          </div>

          {/* {Genero} */}
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Genero
            </label>
            <select name="genero"
              onChange={handleChange}
              className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required>
              <option value="">Selecciona un genero</option>
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
              <option value="other">Otro</option>
            </select>
          </div>

          {/* {Estado civil} */}

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Estado Civil
            </label>
            <select name="estadoCivil"
              onChange={handleChange}
              className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required>
              <option value="">Selecciona Estado Civil</option>
              <option value="single">Soltero/a</option>
              <option value="married">Casado/a</option>
            </select>
          </div>

          {/* {Designation} */}
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Designation
            </label>
            <input type="text" name="designation"
              onChange={handleChange}
              placeholder='Designation'
              className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required />
          </div>

          {/* {Departamento} */}
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Departamento
            </label>
            <select name="department"
              onChange={handleChange}
              className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required>
              <option value="">Select Department</option>
              {departments.map(dep => (
                <option key={dep._id} value={dep._id}>{dep.dep_name}</option>
              ))}
            </select>
          </div>

          {/* {Salario} */}
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Salario
            </label>
            <input type="numbre" name="salary"
              onChange={handleChange}
              placeholder='Salario'
              className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required />
          </div>

          {/* {Password} */}
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Password
            </label>
            <input type="password" name="password"
              placeholder='******'
              onChange={handleChange}
              className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required />

          </div>

          {/* {ROl} */}
          <div>
            <label className='mt-1 p-2 block w-full border border-graty-300 rounded-md'>
              Rol
            </label>
            <select name="rol"
              onChange={handleChange}
              className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required>
              <option value="">Select rol</option>
              <option value="admin">Admin</option>
              <option value="empleado">Empleado</option>
            </select>
          </div>


          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Cargar Imagen
            </label>
            <input type="file"
              name='image'
              onChange={handleChange}
              placeholder='Carga Imagen'
              accept='image/*'
              className='mt-1 p-2 block w-full border border-gray-300 rounded-md' />
          </div>
          <button type='submit'
            className='w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md'>Agregar</button>

        </div>
      </form>


    </div>
  )
}

export default Add