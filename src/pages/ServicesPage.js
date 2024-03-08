import React from 'react'
import { Header } from '../components/Header'

import Services from '../components/Services'

const ServicesPage = () => {
  return (
    <div>
        <Header/>
        {/* <div className="services-hero p-20">
          <h1 className='text-white text-8xl'>Services</h1>
        </div> */}
        <div className="text-white">
          <Services/>
        </div>
    {/* <   Footer/> */}
    </div>
  )
}

export default ServicesPage
