import React, { useState } from 'react'
import { router } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
function Search() {
    const [query,setQuery] = useState({searched:'',filter:'name'})
    // console.log(users)
    const handleChange = e =>{
        // console.log(e.target.value)
        setQuery(prev=>({...prev,[e.target.name]:e.target.value}))
        
            // Inertia.visit('/services/search',{data:query})
        
    }
    const handleSubmit = e=>{
        e.preventDefault()

            Inertia.get('/services/search',query,{
                preserveState: true,
                replace: true,
            })
    }
  return (
    <div className='flex justify-center flex-col items-center'>
        <h3 className="text-center text-4xl text-red-400 mb-10">Services go here !</h3>
            <form onSubmit={handleSubmit} >
        
            <div className=" w-full flex h-12">
            <select name='filter'  value={query.filter} onChange={handleChange} id="small" className="  p-2.5  text-sm text-gray-900 border border-gray-300 
            bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value='name'>name</option>
                <option value="description">description</option>
                

                </select>
                <input type="text" id="search-dropdown"  name='searched'
                className="block p-2.5 px-3  text-sm text-gray-900 bg-gray-50 
                rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300
                focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700
                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" 
                placeholder="Search Mockups, Logos, Design Templates..." 
                value={query.searched}  onChange={handleChange} required />
                
            <button type="submit" className='text-white bg-blue-400  p-2 px-3'>Search</button>
            </div>
    </form>
    </div>
  )
}

export default Search;