import React from 'react'
import './intro.css'
import {Link} from 'react-scroll'
import briefcase from '../../assets/briefcase.png'

const Intro = () => {
  return (
    <section id='intro'>
        <div className='IntroContent'>
            <span className='hello'>Hello,</span>
            <span className='intoText'>I am <span className='intoName'>Pavlo</span><br/>Developer</span>
            <p className='intoParagraph'>I am a passionate programmer looking to further show my skills in the developer world.<br/>I am eager to take on multiple challenges and contribute as much as I can for the benefit of everyone.</p>
            <Link><button className='btn'><img src={briefcase} alt='' className='btnImg'></img>Hire me!</button></Link>
        </div>
        <img src='' alt='' className='backImg'></img>
    </section>
  )
}

export default Intro