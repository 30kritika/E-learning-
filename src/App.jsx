import About from "./components/about/About"
import Campus from "./components/campus/Campus"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Programs from "./components/programs/Programs"
import Testimonals from "./components/testimonials/Testimonals"
import Title from "./components/title/Title"


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our PROGRAMS' title='What We Offer'/>
        <Programs/>
        <About/>
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='TESTIMONIALS' title='What Students Says'/>
        <Testimonals />
        <Title subTitle='Contact Us' title='Get in Touch'/>
      </div>
      
    </div>
  )
}

export default App
