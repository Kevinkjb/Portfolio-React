import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
import {BiMailSend} from 'react-icons/bi'

export const Footer = () =>{
  return(
    <>
    <div className='mt-120 mb-24 text-center'>
      <h2 className='text-custom-color-two text-5xl font font-bold text-shado'>Connect With Me</h2>
    </div>
    <div className='grid grid-cols-3'>
      <a href="https://github.com/Kevinkjb" target='_blank' rel="noreferrer">
        <div className='flex items-center justify-between p-3 bg-github text-white font h-24'>
          <p className='text-4xl'> Github</p>
          <FaGithub className='text-4xl'/>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/kevinbaguioso/" target='_blank' rel='noreferrer'>
        <div className='flex items-center justify-between p-3 bg-linkedin text-white font h-24'>
        <FaLinkedin className='text-4xl'/>
        <p className='text-4xl'> Linkedin</p>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/kevinbaguioso/" target='_blank' rel='noreferrer'>
        <div className='flex items-center justify-between p-3 bg-twitter text-white font h-24' >
        <FaTwitter className='text-4xl'/>
        <a className='text-4xl' href="https://twitter.com/Coder_Kjb"> Twitter</a>
        </div>
      </a>
      
    </div>
    <a href='mailto:kevinjbaguioso@gmail.com'>
      <div className='bg-custom-color p-2 flex justify-center items-center text-white'>
      <h3 className='text-2xl mr-12 tooling'>Shoot me a mail</h3>
      <BiMailSend className='text-5xl'/>
      </div>
    </a>
    <div className='text-center p-5'>
      <p className='text-custom-color-two font text-sm'>Built from scratch with <span>💚</span> © Copyrights 2023. Kevinjb.dev. All Rights Reserved</p>
    </div>
    </>
  )
}