import React, { useEffect } from 'react';
import Layout from './Shared/Layout';
import Swal from 'sweetalert2';
import { Inertia } from '@inertiajs/inertia';
Inertia

function Done() {
  useEffect(()=>{
    // Swal.fire('Done',' your order is registered successfully, our staff will contact you via your phone number to confirm your request. !','success')
    Swal.fire({
      title: 'Done',
      text: "your order is registered successfully, our staff will contact you via your phone number to confirm your request. !",
      icon: 'success',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Okay!'
    }).then((result) => {
      Inertia.get('/services');
      if (result.isConfirmed) {
        // Inertia.get('/services');
      }
    })
  },[])
  const handleClick = ()=>{
    Swal.fire('Done',' your order is registered successfully, our staff will contact you via your phone number to confirm your request. !','success')
  }
  return (
    <div className=" grid place-items-center min-h-screen bg-red-400">
      <h2 className="text-6xl text-green-500 w-auto bg-white">
         Thank You !
          {/* <button onClick={handleClick} className="px-3 py-1 font-bold">click me</button> */}
      </h2>  
    </div>
  )
}

export default Done
Done.layout = page=> <Layout children={page} />