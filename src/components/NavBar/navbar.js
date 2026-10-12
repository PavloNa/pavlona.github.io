import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import {Link as ScrollLink} from 'react-scroll'
import {Link, useLocation} from 'react-router-dom'
import menu from '../../assets/menu.png'

const sections = [
  { to: 'intro', label: 'Home' },
  { to: 'skills', label: 'About' },
  { to: 'projects', label: 'Projects' },
  { to: 'clients', label: 'Experience' },
]

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const { pathname } = useLocation()
  const onHome = pathname === '/'
  const onBlog = pathname.startsWith('/blog')
  const close = () => setShowMenu(false)

  // Escape closes the mobile menu
  useEffect(() => {
    if (!showMenu) return
    const onKey = (e) => { if (e.key === 'Escape') setShowMenu(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [showMenu])

  // On the home page, sections scroll smoothly; from the blog they navigate to /#section.
  // href keeps react-scroll links focusable and usable without JS.
  const sectionLink = (to, children, props) => onHome
    ? <ScrollLink key={to} href={`#${to}`} activeClass='active' to={to} spy={true} smooth={true} offset={-80} duration={500} {...props}>{children}</ScrollLink>
    : <Link key={to} to={`/#${to}`} {...props}>{children}</Link>
  const blogLink = (className, onClick) => (
    <Link to='/blog' className={onBlog ? `${className} active` : className} aria-current={onBlog ? 'page' : undefined} onClick={onClick}>Blog</Link>
  )

  return (
    <nav className='navbar'>
        {sectionLink('intro', <img src={logo} alt='' className='logo'/>, { 'aria-label': 'Back to top' })}
        <div className='desktopMenu'>
            {sections.map((s) => sectionLink(s.to, s.label, { className: 'desktopMenuListItem' }))}
            {blogLink('desktopMenuListItem')}
        </div>
        {sectionLink('contact', 'Contact', { className: 'btn desktopMenuBtn' })}

        <button className='mobMenu' aria-label='Menu' aria-expanded={showMenu} onClick={() => {setShowMenu(!showMenu)}}>
            <img src={menu} alt='' />
        </button>
        <div className={showMenu ? 'navMenu open' : 'navMenu'}>
            {sections.map((s) => sectionLink(s.to, s.label, { className: 'listItem', onClick: close }))}
            {blogLink('listItem', close)}
            {sectionLink('contact', 'Contact', { className: 'listItem', onClick: close })}
        </div>
    </nav>
  )
}

export default NavBar
