
import { Link } from '@inertiajs/inertia-react'
import Layout from '../Shared/Layout'

function UnconfirmedReqs({requests}) {
  return (
    <div className=' bg-red-300  w-full min-h-screen mx-auto text-center  pt-4 min-w-md'>


    <table className="bg-red-100 container">
            <thead>
                <tr>
                    <th>Request ID</th>
                    <th>Service</th>
                    <th>Client Name</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {requests.map(
                request=>
                        <tr key={request.id}>
                            {console.log(request)}
                            <td>{request.id}</td>
                            <td>{request.service.name}</td>
                            <td>{request.client.name}</td>
                            <td>{request.client.phone}</td>
                            <td className='flex gap-2 m-2'>
                                <Link href={`/employee/confirmed/${request.id}`} as='button' className='p-1 w-full font-bold rounded-sm bg-blue-500 text-white'>confirmed</Link>
                                <Link  href={`/employee/paid/${request.id}`} as='button' className='p-1 w-full font-bold rounded-sm bg-green-500 text-white'>paid</Link>
                                <Link  href={`/employee/delete/${request.id}`} as='button' className='p-1 w-full font-bold rounded-sm bg-red-500 text-white'>Delete</Link>
                            </td>
                        </tr>
                        
                    )}
            </tbody>
        </table>
        </div>
    
  )
}

export default UnconfirmedReqs
UnconfirmedReqs.layout = page => <Layout children={page} />