import { Header } from "./Header"
import { Hero } from "./Hero"
import { Projects } from "./Projects"
import { Tools } from "./Tools"
import { Footer } from "./Footer"
import Services from "./Services"

export const Home = () =>{
  return(
    <>
      <Header/>
      <Hero/>
      <Services/>
      <Tools/>
      <Projects/>
      <Footer/>
    </>
  )
}