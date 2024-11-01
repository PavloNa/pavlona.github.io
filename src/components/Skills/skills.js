import React from 'react'
import './skills.css'
import python from '../../assets/python.png'
import fullstack from '../../assets/full-stack.png'
import neural from '../../assets/neural.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDescription'>I am an eager developer looking to further improve my skills by offering my current skillset in the developer world. I am passionate about learning new languages and technologies.</span>
        <div className='skillBars'>
          <div className='skillBar'>
            <img src={python} alt='' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>Python Developer</h2>
              <p>I am able to comfortably develop Python applications.</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={fullstack} alt='' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>Full-Stack Developer</h2>
              <p>I am able to develop full-stack react applications. I have developed API's using MySQL and NoSQL.</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={neural} alt='' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>Problem Solving</h2>
              <p>I am able to problem solve comfortably and will always give it my best.</p>
            </div>
          </div>
        </div>
    </section>

  )
}

export default Skills