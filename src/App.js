
import { Home } from './components/Home'
import { Contact } from './components/Contact'
import { Portfolio } from './components/Portfolio'
import Services from './components/Services'
import './index.css'
import { Route, Routes } from 'react-router-dom'

function App(){
  return(
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="services" element={<Services/>}/>
      <Route path="portfolio" element={<Portfolio/>}/>
      <Route path="contact" element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App