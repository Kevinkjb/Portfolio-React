
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs } from 'react-icons/fa';
import {BiLogoTailwindCss, BiLogoJavascript, BiLogoFigma, BiLogoWordpress} from 'react-icons/bi'

export const Tools = () =>{
  const customStyle = 'items-center flex justify-center md:h-10 lg:w-32 lg:text-sm md:w-24 h-12 w-32 mx-auto md:text-xs bg-btn-bg-color text-white rounded-md text-sm font-bold '
  const iconStyles = 'text-custom-color text-3xl mr-2'
  return(
    <div className="h-96">
      <div className="grid justify-items-center">
        <div className="md:w-48 border-custom-color-two sm:w-32 sm:mx-auto border-2 w-56 rounded-md h-16 flex items-center justify-center font">
          <h3 className="selection:bg-custom-color selection:text-white text-custom-color-two text-2xl tooling uppercase md:text-xl">Tooling</h3>
        </div>
        <div className="selection:bg-custom-color bg-custom-color rounded-xl grid grid-cols-5 items-center gap-1 my-16  md:w-120 md:h-60 sm:w-32  md:gap-2 xs:w-80 xs:h-72 xs:grid-cols-2 md:grid-cols-3 w-192 p-5 h-48">
          <div className={customStyle}><FaHtml5 className={iconStyles} /> HTML</div>
          <div className={customStyle}><FaCss3Alt className={iconStyles}/> CSS</div>
          <div className={customStyle}><FaBootstrap className={iconStyles}/> Bootstrap</div>
          <div className={customStyle}><BiLogoTailwindCss className={iconStyles}/> Tailwind</div>
          <div className={customStyle}><BiLogoJavascript className={iconStyles}/> JavaScript</div>
          <div className={customStyle}>Typescript</div>
          <div className={customStyle}><FaReact className={iconStyles}/> React</div>
          <div className={customStyle}><FaNodeJs className={iconStyles}/>Node</div>
          <div className={customStyle}><BiLogoFigma className={iconStyles}/> Figma</div>
          <div className={customStyle}><BiLogoWordpress className={iconStyles}/> Wordpress</div>
        </div>
      </div>
    </div>
  )
}