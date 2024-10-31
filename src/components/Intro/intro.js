import React from 'react'
import './intro.css'
import {Link} from 'react-scroll'
import briefcase from '../../assets/briefcase.png'
import {ReactTyped} from 'react-typed'
import me from '../../assets/me.jpg'

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I am <span className='introName'>Pavlo</span><br/>
            <span className='changingText'>I'm a <ReactTyped strings={["Developer", "Programmer", "Software Engineer"]} typeSpeed={80} backSpeed={80} loop/></span></span>
            <p className='introParagraph'>I am a passionate programmer looking to further show my skills in the developer world.<br/>I am eager to take on multiple challenges and contribute as much as I can for the benefit of everyone.</p>
            <Link><button className='btn'><img src={briefcase} alt='' className='btnImg'></img>Hire me!</button></Link>
        </div>
        <img src={me} alt='' className='backImg'></img>
    </section>
  )
}

export default Intro