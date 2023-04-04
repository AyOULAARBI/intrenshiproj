import { Link } from '@inertiajs/inertia-react'
import Layout from '../Shared/Layout'

function Employees({employees}) {
  return (
    <div className=' flex flex-col items-center min-h-screen bg-red-300  w-full  mx-auto text-center   pt-4 min-w-md'>
        <div className=' max-w-sm mb-3'>
        <Link href={`/admin/employee/create`} as='button' className='p-1 w-full font-bold 
                                rounded-sm bg-green-300 text-white'>Add Employee</Link>
        </div>
    <table className="bg-red-100 container ">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(
                employee=>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td className='flex gap-2 m-2'>
                                <Link href={`/admin/employee/edit/${employee.id}`} as='button' className='p-1 w-full font-bold 
                                rounded-sm bg-blue-500 text-white'>Edit</Link>
                                <Link  href={`/admin/employee/delete/${employee.id}`} as='button' className='p-1 w-full font-bold rounded-sm 
                                bg-red-500 text-white'>Delete</Link>
                            </td>
                        </tr>
                        
                    )}
            </tbody>
        </table>
        </div>
    
  )
}

export default Employees
Employees.layout = page => <Layout children={page} />