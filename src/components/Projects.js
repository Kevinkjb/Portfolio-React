
import {Link} from 'react-router-dom'

// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import { Carousel } from 'react-responsive-carousel';

// import deviceWorx from '../img/Deviceworx portfolio.png'
// import plantLife from '../img/Plant Life Website.png'
// import weatherApp from '../img/Portfolio1Weather.png'
// import comingSoon from '../img/Image Coming Soon.png'
// import todoList from '../img/Todo list Project Website.png'


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
          <div className='flex justify-between text-custom-color-two my-2'>
            <p className='border-2 border-custom-color-two p-1 text-xs'>One</p>
            <p className='border-2 border-custom-color-two p-1 text-xs'>Two</p>
            <p className='border-2 border-custom-color-two p-1 text-xs'>Three</p>
            <p className='border-2 border-custom-color-two p-1 text-xs'>Four</p>
          </div>
          <p className='w-96 mt-5 text-white '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed eros dui, scelerisque eu imperdiet at, luctus et leo. 
          Donec ac dolor et eros rutrum scelerisque quis consequat urna. 
          Praesent aliquet odio ut neque sodales luctus in at purus. 
          Fusce ultricies ex ut orci vulputate, et faucibus purus porttitor.</p>
        </div>
        <div className='border-2 border-custom-color-two p-5'>
          <h2 className='font text-3xl text-custom-color-two'>Project Two</h2>
          <div className='flex justify-between text-custom-color-two my-2'>
            <p className='border-2 border-custom-color-two p-1 text-xs'>One</p>
            <p className='border-2 border-custom-color-two p-1 text-xs'>Two</p>
            <p className='border-2 border-custom-color-two p-1 text-xs'>Three</p>
            <p className='border-2 border-custom-color-two p-1 text-xs'>Four</p>
          </div>
          <p className='w-96 mt-5 text-white '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed eros dui, scelerisque eu imperdiet at, luctus et leo. 
          Donec ac dolor et eros rutrum scelerisque quis consequat urna. 
          Praesent aliquet odio ut neque sodales luctus in at purus. 
          Fusce ultricies ex ut orci vulputate, et faucibus purus porttitor.</p>
        </div>
        <div className='border-2 border-custom-color-two p-5'>
          <h2 className='font text-3xl text-custom-color-two'>Project Three</h2>
          <div className='flex justify-between text-custom-color-two my-2'>
            <p className='border-2 border-custom-color-two p-1 text-xs'>One</p>
            <p className='border-2 border-custom-color-two p-1 text-xs'>Two</p>
            <p className='border-2 border-custom-color-two p-1 text-xs'>Three</p>
            <p className='border-2 border-custom-color-two p-1 text-xs'>Four</p>
          </div>
          <p className='w-96 mt-5 text-white '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed eros dui, scelerisque eu imperdiet at, luctus et leo. 
          Donec ac dolor et eros rutrum scelerisque quis consequat urna. 
          Praesent aliquet odio ut neque sodales luctus in at purus. 
          Fusce ultricies ex ut orci vulputate, et faucibus purus porttitor.</p>
        </div>
        <div className='border-2 border-custom-color-two p-5'>
          <h2 className='font text-3xl text-custom-color-two'>Project Four</h2>
          <div className='flex justify-between text-custom-color-two my-2'>
            <p className='border-2 border-custom-color-two p-1 text-xs'>One</p>
            <p className='border-2 border-custom-color-two p-1 text-xs'>Two</p>
            <p className='border-2 border-custom-color-two p-1 text-xs'>Three</p>
            <p className='border-2 border-custom-color-two p-1 text-xs'>Four</p>
          </div>
          <p className='w-96 mt-5 text-white '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed eros dui, scelerisque eu imperdiet at, luctus et leo. 
          Donec ac dolor et eros rutrum scelerisque quis consequat urna. 
          Praesent aliquet odio ut neque sodales luctus in at purus. 
          Fusce ultricies ex ut orci vulputate, et faucibus purus porttitor.</p>
        </div>
        <div className='border-2 border-custom-color-two p-5'>
          <h2 className='font text-3xl text-custom-color-two'>Project Five</h2>
          <div className='flex justify-between text-custom-color-two my-2'>
            <p className='border-2 border-custom-color-two p-1 text-xs'>One</p>
            <p className='border-2 border-custom-color-two p-1 text-xs'>Two</p>
            <p className='border-2 border-custom-color-two p-1 text-xs'>Three</p>
            <p className='border-2 border-custom-color-two p-1 text-xs'>Four</p>
          </div>
          <p className='w-96 mt-5 text-white '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed eros dui, scelerisque eu imperdiet at, luctus et leo. 
          Donec ac dolor et eros rutrum scelerisque quis consequat urna. 
          Praesent aliquet odio ut neque sodales luctus in at purus. 
          Fusce ultricies ex ut orci vulputate, et faucibus purus porttitor.</p>
        </div>
        <div className='border-2 border-custom-color-two p-5'>
          <h2 className='font text-3xl text-custom-color-two'>Project Six</h2>
          <div className='flex justify-between text-custom-color-two my-2'>
            <p className='border-2 border-custom-color-two p-1 text-xs'>One</p>
            <p className='border-2 border-custom-color-two p-1 text-xs'>Two</p>
            <p className='border-2 border-custom-color-two p-1 text-xs'>Three</p>
            <p className='border-2 border-custom-color-two p-1 text-xs'>Four</p>
          </div>
          <p className='w-96 mt-5 text-white '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed eros dui, scelerisque eu imperdiet at, luctus et leo. 
          Donec ac dolor et eros rutrum scelerisque quis consequat urna. 
          Praesent aliquet odio ut neque sodales luctus in at purus. 
          Fusce ultricies ex ut orci vulputate, et faucibus purus porttitor.</p>
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