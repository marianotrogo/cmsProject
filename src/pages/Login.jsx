import React from 'react'

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-8 bg-gray-100">
    <h2 className="text-2xl font-semibold mb-6">Ingresando al Panel de Control</h2>
    <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xs">
        <h2 className="text-xl font-medium mb-4">Ingrese</h2>
        <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input type="email" placeholder="Enter Email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input type="password" placeholder="******" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">Iniciar Sesion</button>
    </form>
</div>
  )
}

export default Login