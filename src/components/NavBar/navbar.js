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
        <button className='btn desktopMenuBtn' onClick={()=> {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contactme} alt='' className='btnIcon' />Contact me</button>
    
        <button className='mobMenu' aria-label='Menu' aria-expanded={showMenu} onClick={() => {setShowMenu(!showMenu)}}>
            <img src={menu} alt='' />
        </button>
        <div className={showMenu ? 'navMenu open' : 'navMenu'}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => {setShowMenu(false)}}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-70} duration={500} className='listItem' onClick={() => {setShowMenu(false)}}>About</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => {setShowMenu(false)}}>Experience</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => {setShowMenu(false)}}>Contact</Link>
        </div>
    </nav>
  )
}

export default NavBar