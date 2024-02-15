
import { Home } from './components/Home'
import { Contact } from './components/Contact'
import { Portfolio } from './components/Portfolio'

import './index.css'
import { Route, Routes } from 'react-router-dom'
import ServicesPage from './components/ServicesPage'

function App(){
  return(
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="services" element={<ServicesPage/>}/>
      <Route path="portfolio" element={<Portfolio/>}/>
      <Route path="contact" element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App