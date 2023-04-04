import React from 'react'
import Layout from './Shared/Layout'
import Hero from './Parts/Hero'
function Welcome() {
  return (
    <div className='h-full'>
      <Hero/>
    </div>
  )
}

export default Welcome
Welcome.layout = page => <Layout children={page} />