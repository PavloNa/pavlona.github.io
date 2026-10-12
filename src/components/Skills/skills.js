import React from 'react'
import './skills.css'

// Each area is backed by the roles listed under Experience
const areas = [
  {
    title: 'Backend services',
    text: 'Kotlin and Spring Boot at Expedia, Python and PostgreSQL at Viqal. gRPC between microservices, with circuit breakers for when a dependency fails.',
    stack: 'kotlin · spring boot · python · postgresql · grpc',
  },
  {
    title: 'Full-stack',
    text: 'React front ends on APIs backed by MySQL and NoSQL. At Expedia I moved a legacy React component to a config-driven module shipped across 60+ locales.',
    stack: 'react · mysql · nosql · a/b testing',
  },
  {
    title: 'CI/CD and reliability',
    text: 'Build and deploy pipelines on Jenkins and AWS, containerized services with Docker and NGINX, and monitoring in Grafana.',
    stack: 'jenkins · aws · docker · nginx · grafana',
  },
]

const Skills = () => {
  return (
    <section id='skills'>
        <header className='sectionHead'>
          <h2 className='sectionTitle'>What I do</h2>
          <p className='comment'>day to day</p>
        </header>
        <ul className='rows'>
          {areas.map((area) => (
            <li key={area.title} className='row'>
              <h3>{area.title}</h3>
              <div>
                <p>{area.text}</p>
                <p className='comment'>{area.stack}</p>
              </div>
            </li>
          ))}
        </ul>
    </section>
  )
}

export default Skills
