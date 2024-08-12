import { useState } from "react"
import About from "./components/about/About"
import Campus from "./components/campus/Campus"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Programs from "./components/programs/Programs"
import Testimonials from "./components/testimonials/Testimonials"
import Title from "./components/title/Title"
import Video from "./components/video/Video"


const App = () => {

  const [playState, setPlayState]= useState(false);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our PROGRAMS' title='What We Offer'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='TESTIMONIALS' title='What Students Says'/>
        <Testimonials />
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
      <Video playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
