
import {Link} from 'react-router-dom'

// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import { Carousel } from 'react-responsive-carousel';

import deviceWorx from '../img/PixelProject.png'
// import plantLife from '../img/Plant Life Website.png'
import comingSoon from '../img/image.png'



export const Projects = () =>{
  return(
    <>
      <div className="grid justify-items-center mt-32">
        <div className="selection:bg-custom-color selection:text-white md:w-48  border-2 border-custom-color-two w-72 rounded-md h-16 flex items-center justify-center font">
          <h3 className="text-custom-color-two text-2xl tooling uppercase md:text-xl">Projects</h3>
        </div>
        <div className='mt-32 grid grid-cols-3 gap-10'>
        <div className='border-2 border-custom-color-two p-5'>
          <h2 className='font text-3xl text-custom-color-two'>Project One</h2>
          <img className='w-96 h-96 object-cover' src={comingSoon} alt="coming soon" />
        </div>
        <div className='border-2 border-custom-color-two p-5'>
          <h2 className='font text-3xl text-custom-color-two'>Project Two</h2>

          <img className='w-96 h-96 object-cover' src={comingSoon} alt="coming soon" />
        </div>
        <div className='border-2 border-custom-color-two p-5'>
          <h2 className='font text-3xl text-custom-color-two'>Project Three</h2>
          <img className='w-96 h-96 object-cover' src={comingSoon} alt="coming soon" />
        </div>
        <div className='border-2 border-custom-color-two p-5'>
          <h2 className='font text-3xl text-custom-color-two'>Project Four</h2>

          <img className='w-96 h-96 object-cover' src={deviceWorx} alt="deviceworx" />
        </div>
        <div className='border-2 border-custom-color-two p-5'>
          <h2 className='font text-3xl text-custom-color-two'>Project Five</h2>

          <img className='w-96 h-96 object-cover' src={comingSoon} alt="coming soon" />
        </div>
        <div className='border-2 border-custom-color-two p-5'>
          <h2 className='font text-3xl text-custom-color-two'>Project Six</h2>

          <img className='w-96 h-96 object-cover' src={comingSoon} alt="coming soon" />
        </div>
          
        </div>
        <div className='selection:bg-custom-color selection:text-white my-32'>
          <Link className='btn border-2 border-custom-color-two tooling w-120 h-20 text-custom-color-two text-xl' to='/portfolio'>
            All Project Details
          </Link>
        </div>
      </div>
    </>
  )
}