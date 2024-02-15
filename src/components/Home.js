import { Header } from "./Header"
import { Hero } from "./Hero"
import { Projects } from "./Projects"
import { Tools } from "./Tools"
import { Footer } from "./Footer"

export const Home = () =>{
  return(
    <>
      <Header/>
      <Hero/>
      <Tools/>
      <Projects/>
      <Footer/>
    </>
  )
}