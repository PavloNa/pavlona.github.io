import React, { useRef } from 'react'
import './contact.css'
import sky from '../../assets/sky.png'
import viqal from '../../assets/viqal.png'
import expedia from '../../assets/expedia.webp'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_g3xylb5', 'template_ebxtzbf', form.current, {
            publicKey: 'TA8FfiV0DXaGs_W28',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset()
              alert('Email sent!')
              document.getElementById('intro').scrollIntoView({behavior: 'smooth'});
            },
            (error) => {
              console.log('FAILED...', error.text);
              alert('Email failed to send. Please try again later.')
            },
          );
      };

  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='sectionTitle'>Work Experience</h1>
            <p className='sectionLead'>I have had the opportunity to work with the following companies:</p>
            <div className='experiences'>
                <div className='experience card'>
                    <img src={sky} alt='' className='clientImg'></img>
                    <div className='experienceText'>
                        <h2>Sky UK, Associate Developer</h2>
                        <h3>July 2022 – July 2023</h3>
                        <p>
                            As an Associate Developer at Sky UK, I worked on building and maintaining automation
                            and CI/CD tooling for large-scale systems. I contributed to containerized services,
                            full-stack applications, and legacy codebases, focusing on improving reliability,
                            performance, and deployment efficiency across teams.
                        </p>
                        <p className='skills'>Skills:</p>
                        <ul>
                            <li>Python</li>
                            <li>Full-Stack Development</li>
                            <li>Jenkins (CI/CD)</li>
                            <li>Docker & Containerized Services</li>
                            <li>NGINX</li>
                            <li>Automation Testing</li>
                            <li>Shell Scripting</li>
                            <li>Grafana Monitoring</li>
                            <li>SMTP & Background Services</li>
                            <li>Legacy Code Debugging</li>
                        </ul>
                    </div>
                </div>
                <div className='experience card'>
                    <img src={viqal} alt='' className='clientImg'></img>
                    <div className='experienceText'>
                        <h2>Viqal, Backend Developer</h2>
                        <h3>September 2025 – April 2026</h3>
                        <p>
                            As a Backend Developer at Viqal, I designed and maintained scalable backend systems and
                            cloud infrastructure. I built and deployed CI/CD pipelines on AWS, developed
                            Python-based services and PostgreSQL schemas, and worked closely with leadership to
                            modernize system architecture, improve security, and support enterprise-scale growth.
                        </p>
                        <p className='skills'>Skills:</p>
                        <ul>
                            <li>Python Backend Development</li>
                            <li>PostgreSQL & Database Design</li>
                            <li>AWS Infrastructure</li>
                            <li>Jenkins CI/CD Pipelines</li>
                            <li>API Integration (Third-Party Services)</li>
                            <li>System Architecture & Refactoring</li>
                            <li>Automated Log Analysis</li>
                            <li>Security & Performance Optimization</li>
                            <li>Incident Monitoring & Reliability</li>
                        </ul>
                    </div>
                </div>
                <div className='experience card'>
                    <img src={expedia} alt='' className='clientImg'></img>
                    <div className='experienceText'>
                        <h2>Expedia Group, Software Development Engineer I</h2>
                        <h3>April 2026 – Present</h3>
                        <p>
                            As a Software Development Engineer at Expedia Group in Rome, I led the architecture for a
                            dynamic content-personalization feature on a service handling 21,000+ requests per minute,
                            scoping work across three microservices. I built a fault-tolerant gRPC client in
                            Kotlin/Spring Boot, migrated a legacy React component to a config-driven module shipped via
                            A/B testing across 60+ locales, and fixed production and CI/CD reliability issues.
                        </p>
                        <p className='skills'>Skills:</p>
                        <ul>
                            <li>Kotlin & Spring Boot</li>
                            <li>gRPC & Microservices</li>
                            <li>Circuit-Breaker Fault Tolerance</li>
                            <li>System Architecture</li>
                            <li>React</li>
                            <li>A/B Testing</li>
                            <li>Internationalization (60+ Locales)</li>
                            <li>Testing (97%+ Coverage)</li>
                            <li>CI/CD Reliability</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div id='contact'>
            <h1 className='sectionTitle'>Contact me</h1>
            <form ref={form} className='contactForm' onSubmit={sendEmail}>
                <input type='text' className='name' name='name' placeholder='Your Name' required/>
                <input type='email' className='email' name='email' placeholder='Your Email' required/>
                <textarea className='msg' name='message' rows='5' placeholder='Your Message' required></textarea>
                <button type='submit' value='Send' className='btn btnPrimary submitBtn'>Submit</button>
            </form>
        </div>
    </section>
  )
}

export default Contact