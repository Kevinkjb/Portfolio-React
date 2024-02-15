import React from 'react'
import webDev from '../img/webdev.png'
import responsiveDev from '../img/responsive-design.png'
import webHosting from '../img/hosting.png'
import webMaintenance from '../img/web-maintenance.png'

const Services = () => {
  return (
    <div className='my-40 font'>
        <div className="md:w-48 border-custom-color-two sm:w-32 sm:mx-auto border-2 w-56 rounded-md h-16 flex items-center justify-center mx-auto my-24">
          <h3 className="selection:bg-custom-color selection:text-white text-custom-color-two text-2xl tooling uppercase md:text-xl">Services</h3>
        </div>
        <div className='flex justify-center   w-[100%]'>
            <div className="all-services grid place-items-center grid-cols-2  grid-rows-2 p-10 gap-5 w-[60%] border-0 rounded-md">
                <div className="box bg-custom-color text-white w-144 p-10 h-96 text-center border-0 rounded-md">
                    <h4 className='text-2xl my-5 tracking-wider'>Website Design and Development</h4>
                    <img className='w-24 h-[6rem] object-cover  my-5 mx-auto' src={webDev} alt="Web Developement" />
                    <p className='text-center tracking-wide'>Crafting visually appealing and functional websites from scratch, 
                        tailored to your brand identity and business objectives. 
                        This includes creating custom designs, writing clean and efficient code, and ensuring cross-browser compatibility.</p>
                </div>
                <div className="box bg-custom-color text-white w-144 p-10 h-96 text-center border-0 rounded-md">
                    <h4 className='text-2xl my-5 text-center tracking-wider'>Responsive Web Development</h4>
                    <img className='w-24 h-[6rem] object-cover my-5 mx-auto' src={responsiveDev} alt="Responsive Developement" />
                    <p className='text-center tracking-wide'>Building websites that adapt seamlessly to various screen sizes and devices, 
                        ensuring optimal user experience across desktops, laptops, tablets, and smartphones.</p>
                </div>
                <div className="box bg-custom-color text-white w-144 p-10 h-96 border-0 rounded-md text-center">
                    <h4 className='text-2xl my-5 tracking-wider'>Website Maintenance and Support</h4>
                    <img className='w-24 h-[6rem] object-cover  my-5 mx-auto' src={webMaintenance} alt="Web Developement" />
                    <p className='text-center tracking-wide'>Providing ongoing maintenance services to keep your website secure, up-to-date, and running smoothly. 
                        This includes regular backups, software updates, security patches, performance optimization, and troubleshooting.</p>
                </div>
                <div className="box bg-custom-color text-white w-144 p-10 h-96 border-0 rounded-md text-center">
                    <h4 className='text-2xl my-5 tracking-wider'>Website Hosting and Domain Management</h4>
                    <img className='w-24 h-[6rem] object-cover  my-5 mx-auto' src={webHosting} alt="Web Developement" />
                    <p className='text-center tracking-wide'>Assisting with domain registration, web hosting setup, and configuration to ensure reliable and secure hosting for your website.</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Services
