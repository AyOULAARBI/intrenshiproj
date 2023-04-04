import React, { useState } from 'react'
import Layout from './Shared/Layout';
import Search from './Parts/Search';
import Card from './Parts/Card';

function Services({services,now}) {
    // const [USERS,setQuery] = useState(users)
    console.log(now,services)

  return (
    <div className=''>
        <Search/>
        <div className="flex space-x-6  justify-center items-center flex-wrap">
        {services.map(service=> 
            <Card key={service.id} service={service} />
            )}
        </div>
    </div>
  )
}

export default Services;
Services.layout = page=> <Layout children={page} />