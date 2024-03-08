
import { HomePage } from './pages/HomePage'
import { ContactPage } from './pages/ContactPage'
import { PortfolioPage } from './pages/PortfolioPage'

import './index.css'
import { Route, Routes } from 'react-router-dom'
import ServicesPage from './pages/ServicesPage'
import ParticlesBackground from './components/ParticlesBackground'

function App(){
  return(
    <>
    <ParticlesBackground/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="services" element={<ServicesPage/>}/>
      <Route path="portfolio" element={<PortfolioPage/>}/>
      <Route path="contact" element={<ContactPage/>}/>
    </Routes>
    </>
  )
}

export default App