import { useState } from 'react'
import './navbar.css'
import logo from '/src/assets/logo.png'
import { useEffect } from 'react';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll',() =>{
      window.scrollY > 70 ? setSticky(true): setSticky(false)
    })
  },[]);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
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
