import { Inertia } from "@inertiajs/inertia"
import { useState } from "react"


function Modal({setModalFunc,service_id,errors}) {
    console.log(errors)
    const [data,setData] = useState({name:"",email:"",phone:"",address:"",service_id:service_id})
    const handleClick = e=>{
        setModalFunc(false)
    }
    const handleChange = e=>{
        // console.log(data)
        setData(prev=>(
            {...prev,[e.target.name]:e.target.value}
        ))
    }
    const handleSubmit = e=>{
        e.preventDefault()
        Inertia.post('/request',data,{
            preserveState: true,
            replace: true,
        })
        // console.log(data)
        // handleClick()
    }

  return (

        <div className="   flex justify-center items-center  fixed
         inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/2 my-3 mx-auto max-w-4xl ">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Enter you Info</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={handleClick}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      X
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form  onSubmit={handleSubmit} className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    name='name' value={data.name} onChange={handleChange}
                    />
                    {errors.name && <p className="text-red-500">{errors.name}</p> }
                    <label className="block text-black text-sm font-bold mb-1">
                      Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    name='email' type='email' value={data.email} onChange={handleChange}
                    />
                    {errors.email && <p className="text-red-500">{errors.email}</p> }
                    <label className="block text-black text-sm font-bold mb-1">
                      Phone
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" 
                    name='phone' type='tel' value={data.phone} onChange={handleChange}
                    />
                    {errors.phone && <p className="text-red-500">{errors.phone}</p> }
                    <label className="block text-black text-sm font-bold mb-1">
                      Address
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" 
                    name='address'  value={data.address} onChange={handleChange}
                    />
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={handleClick}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="submit"
                    
                  >
                    Submit
                  </button>
                </div>
                  </form>
                </div>
              </div>
            </div>

    </div>
  )
}

export default Modal