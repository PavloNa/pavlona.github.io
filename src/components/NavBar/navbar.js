import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import contactme from '../../assets/contactme.png'
import {Link} from 'react-scroll'

const NavBar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='desktopMenu'>
            <Link className='desktopMenuListItem'>Home</Link>
            <Link className='desktopMenuListItem'>About</Link>
            <Link className='desktopMenuListItem'>Portfolio</Link>
        </div>
        <button className='desktopMenuBtn'>
            <img src={contactme} alt='' className='desktopMenuImg' />Contact me</button>
    </nav>
  )
}

export default NavBar