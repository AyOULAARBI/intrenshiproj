import React, { useRef } from 'react'
import Layout from '../Shared/Layout'
import { Inertia } from '@inertiajs/inertia'


function Login() {
    let emailRef = useRef()
    let passwordRef = useRef()

    const handleSubmit = e=>{
        e.preventDefault()
        let data = {
            email : emailRef.current.value,
            password : passwordRef.current.value,
        }
        // console.log(data)
        Inertia.post('/login',data,{
            preserveState:true,
            replace:true
        })
    }
  return (
    <div className="grid place-items-center min-h-screen  bg-red-400">
        <form onSubmit={handleSubmit} className='bg-zinc-200 p-4 rounded-md shadow flex flex-col mb-2 space-y-5 w-55 md:w-88 '>
            <div className="flex flex-col ">
                <label htmlFor="email" className='font-bold' >email</label>
                <input type="email" name='email' ref={emailRef} />
            </div>
            <div className="flex flex-col ">
                <label htmlFor="password" className='font-bold'>password</label>
                <input type="password" name='password'  ref={passwordRef} />
            </div>
            <div className="flex flex-co ">
                <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-4">Register</button>
            </div>
        </form>
    </div>
  )
}

export default Login
Login.layout = page => <Layout children={page} />