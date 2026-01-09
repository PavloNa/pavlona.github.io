import React from 'react'
import './Projects.css'
import demo from '../../assets/demo.png'
import github from '../../assets/github.png'
import minutes_generator from '../../assets/minutes_generator.png'
import hugging from '../../assets/hugging.png'
import medner from '../../assets/medner.png'
import hangman from '../../assets/hangman.png'

const Projects = () => {
  return (
    <section id='projects'>
        <span className='projectsTitle'>Projects</span>
        <span className='projectsDescription'>Here are some of my projects. </span>
        <div className="projectsGrid">
          {/* Copy-paste this block for each project */}
          <article className="projectCard">
            <img src={minutes_generator} alt="preview" className="projectImage" />
            <div className="projectContent">
              <h3 className="projectTitle">Minutes Generator</h3>
              <p className="projectDesc">This project allows you to generate PDF templates based on meeting transcripts/audio recordings. You can set it up using your own API keys.</p>
              <div className="projectButtons">
                <a className="btn" href="https://github.com/PavloNa/Minutes-Generator/tree/main" target="_blank" rel="noreferrer">
                  <img src={github} alt="github" className="btnIcon" /> GitHub
                </a>
                <a className="btn secondary" href="https://minutes.pavlonaz.com" target="_blank" rel="noreferrer">
                <img src={demo} alt="github" className="btnIcon" />Demo
                </a>
              </div>
            </div>
          </article>
            <article className="projectCard">
            <img src={medner} alt="preview" className="projectImage" />
            <div className="projectContent">
              <h3 className="projectTitle">MedNer-FYP</h3>
              <p className="projectDesc">University Final Year Project 🎓. Medical Named Entity Recognition fine-tuned models 🧠 using Spacy to help hospitals categorise their vast amounts of data📝.</p>
              <div className="projectButtons">
                <a className="btn" href="https://github.com/PavloNa/Minutes-Generator/tree/main" target="_blank" rel="noreferrer">
                  <img src={github} alt="github" className="btnIcon" /> GitHub
                </a>
                <a className="btn" href="https://huggingface.co/pavlopt" target="_blank" rel="noreferrer">
                  <img src={hugging} alt="huggingface" className="btnIcon" /> HFace
                </a>
              </div>
            </div>
          </article>
            <article className="projectCard">
            <img src={hangman} alt="preview" className="projectImage" />
            <div className="projectContent">
              <h3 className="projectTitle">ARM Assembly Hangman</h3>
              <p className="projectDesc">Simple hangman game coded in ARM Assembly 💻. First project in assembly 📈.</p>
              <div className="projectButtons">
                <a className="btn" href="https://github.com/PavloNa/ARM-Assembly-Hangman/tree/main" target="_blank" rel="noreferrer">
                  <img src={github} alt="github" className="btnIcon" /> GitHub
                </a>
              </div>
            </div>
          </article>
        </div>
    </section>
  )
}

export default Projects