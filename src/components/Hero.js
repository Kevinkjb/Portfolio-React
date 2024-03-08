// import imgProfile from '../img/PixelProf.png'

export const Hero = ()=>{
  return(
    <div className='h-screen flex items-center justify-center m-auto p-4 hero-section'>
      <div className="grid grid-cols-2 md:grid-cols-1 items-center w-customThree justify-items-center ml-64 gap-4">
        <div className="selection:bg-custom-color selection:text-white mx-auto xs:w-88 z-10">
          <h2 className='text-white text-3xl font'>Take your business</h2>
          <h1 className='text-white text-8xl tooling mt-2'>Above Expectations</h1>
          {/* <h3 className='px-2 font text-5xl  text-white font-bold xs:text-center xs:text-4xl'>Hi There! I'm Kevin</h3> */}
          {/* <p 
          className="px-2 mt-3 text-xl font tracking-wide leading-8 text-gray-300 xs:text-center xs:text-sm xs:leading-7">

          I am a passionate frontend developer,  
          I specialize in turning design concepts into pixel-perfect, 
          responsive web experiences. 
          I'm dedicated to creating websites that not only look 
          stunning but also deliver exceptional user experiences. 

          </p> */}
        </div>
        {/* <div className=''>
          <img className='w-96 h-96 xxs:w-80 xxs:h-80' src={imgProfile} alt="profile"/>
        </div> */}
      </div>
      
    </div>
  )
}