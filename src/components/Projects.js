
import {Link} from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import images from '../data'


export const Projects = () =>{
  return(
    <>
      <div className="grid justify-items-center mt-32">
        <div className="selection:bg-custom-color selection:text-white md:w-48  border-2 border-custom-color-two w-72 rounded-md h-16 flex items-center justify-center font">
          <h3 className="text-custom-color-two text-2xl tooling uppercase md:text-xl">Projects</h3>
        </div>
        <div className='mt-32 '>
          <Carousel className='mx-auto w-144'
          autoPlay 
          infiniteLoop
          stopOnHover
          >
            {images.map((img) => 
              <img 
              className='h-144 object-cover'
                src={img.imgURL} 
                alt={img.alt}
              />
              )
              
            }
          </Carousel>
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