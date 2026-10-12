import React from 'react'
import './intro.css'
import {Link} from 'react-scroll'
import me from '../../assets/me.jpg'
import cv from '../../assets/Pavlo_CV.pdf'

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <p className='comment'>software engineer, rome</p>
            <h1 className='introName'>Pavlo Nazarchuk</h1>
            <p className='introLead'>
              Software Development Engineer at <strong>Expedia Group</strong>. I build backend services in
              Kotlin and Python, and the CI/CD pipelines that ship them.
            </p>
            <div className='introActions'>
              <a href={cv} target='_blank' rel='noreferrer' className='btn btnPrimary'>Read my CV (PDF)</a>
              <Link href='#contact' to='contact' smooth={true} offset={-80} duration={700} className='btn'>Send me a message</Link>
            </div>
        </div>
        <img src={me} alt='Pavlo Nazarchuk' className='introPhoto' />
    </section>
  )
}

export default Intro
