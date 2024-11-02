import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import contactme from '../../assets/contactme.png'
import {Link} from 'react-scroll'
import menu from '../../assets/menu.png'

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Experience</Link>
        </div>
        <button className='desktopMenuBtn' onClick={()=> {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contactme} alt='' className='desktopMenuImg' />Contact me</button>
    
        <img src={menu} alt='Menu' className='mobMenu' onClick={() => {setShowMenu(!showMenu)}}/>
        <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => {setShowMenu(false)}}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-70} duration={500} className='listItem' onClick={() => {setShowMenu(false)}}>About</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => {setShowMenu(false)}}>Experience</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => {setShowMenu(false)}}>Contact</Link>
        </div>
    </nav>
  )
}

export default NavBar