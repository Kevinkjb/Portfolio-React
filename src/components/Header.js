import {Outlet, Link} from 'react-router-dom'
export const Header = () =>{

  return(
    <>
      <nav className="selection:bg-custom-color selection:text-white flex justify-between items-center bg-transparent h-16">
        <div className="text-white ml-3">
        <Link to="/" className="font font-bold uppercase text-2xl hover:text-custom-color transition-all duration-300">Kevinjb</Link>
        </div>
        <div>
          <ul className="font flex text-white">
          <li className="mx-5">
              <Link to="/" className="font-bold hover:text-custom-color transition-all duration-300">Home</Link>
            </li>
            <li className="mx-5">
              <Link to="/services" className="font-bold hover:text-custom-color transition-all duration-300">Services</Link>
            </li>
            <li className="mx-5">
              <Link to="/portfolio" className="font-bold hover:text-custom-color transition-all duration-300">Portfolio</Link>
            </li>
            <li className="mx-5">
              <Link to="/contact" className="font-bold hover:text-custom-color transition-all duration-300">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet/>
    </>
  )
}
