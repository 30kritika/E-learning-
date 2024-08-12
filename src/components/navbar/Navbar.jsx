import './navbar.css'
import logo from '/src/assets/logo.png'
const Navbar = () => {
  return (
    <nav className='container'>
      <img className='logo' src={logo} alt='' />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
