import React from 'react'
import './Projects.css'
import github from '../../assets/github.png'
import minutes_generator from '../../assets/minutes_generator.png'
import hugging from '../../assets/hugging.png'
import medner from '../../assets/medner.png'
import hangman from '../../assets/hangman.png'

// Add a project by adding an entry here
const projects = [
  {
    title: 'Minutes Generator',
    image: minutes_generator,
    text: 'Generates PDF meeting minutes from a transcript or audio recording. Runs on your own API keys.',
    links: [{ label: 'Source on GitHub', icon: github, href: 'https://github.com/PavloNa/Minutes-Generator/tree/main' }],
  },
  {
    title: 'MedNER',
    note: 'final year project',
    image: medner,
    text: 'Fine-tuned spaCy models for medical named entity recognition, to help hospitals categorise large amounts of clinical text.',
    links: [{ label: 'Models on Hugging Face', icon: hugging, href: 'https://huggingface.co/pavlopt' }],
  },
  {
    title: 'ARM Assembly Hangman',
    image: hangman,
    imagePosition: 'top left',
    text: 'Hangman written in ARM assembly. My first assembly project.',
    links: [{ label: 'Source on GitHub', icon: github, href: 'https://github.com/PavloNa/ARM-Assembly-Hangman/tree/main' }],
  },
]

const Projects = () => {
  return (
    <section id='projects'>
        <header className='sectionHead'>
          <h2 className='sectionTitle'>Projects</h2>
          <p className='comment'>side projects and university work</p>
        </header>
        <ul className='projectList'>
          {projects.map((p) => (
            <li key={p.title} className='projectCard card'>
              <img src={p.image} alt='' className='projectImage' style={{ objectPosition: p.imagePosition }} />
              <div className='projectContent'>
                <h3 className='projectTitle'>{p.title}</h3>
                {p.note && <p className='comment'>{p.note}</p>}
                <p className='projectDesc'>{p.text}</p>
                <div className='projectButtons'>
                  {p.links.map((link) => (
                    <a key={link.href} className='btn' href={link.href} target='_blank' rel='noreferrer'>
                      <img src={link.icon} alt='' className='btnIcon' /> {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
    </section>
  )
}

export default Projects
