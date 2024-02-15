import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import Services from './Services'

const ServicesPage = () => {
  return (
    <div>
        <Header/>
        <div className="text-white  h-screen">
          <Services/>
        </div>
    <   Footer/>
    </div>
  )
}

export default ServicesPage
