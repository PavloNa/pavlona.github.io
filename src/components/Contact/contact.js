import React, { useRef } from 'react'
import './contact.css'
import sky from '../../assets/sky.png'
import viqal from '../../assets/viqal.png'
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
            },
          );
      };

  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='clientHeader' >Work Experience</h1>
            <p className='clientParagraph'>I have had the opportunity to worth with the following company:</p>
            <div className='experiences'>
                <div className='experience'>
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
                        <br/>
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
                <div className='experience'>
                    <img src={viqal} alt='' className='clientImg'></img>
                    <div className='experienceText'>
                        <h2>Viqal, Backend Developer</h2>
                        <h3>September 2025 - Present</h3>
                        <p>
                            As a Backend Developer at Viqal, I design and maintain scalable backend systems and
                            cloud infrastructure. I built and deployed CI/CD pipelines on AWS, developed
                            Python-based services and PostgreSQL schemas, and worked closely with leadership to
                            modernize system architecture, improve security, and support enterprise-scale growth.
                        </p>
                        <br/>
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
            </div>
        </div>
        <div id='contact'>
            <h1 className='contactTitle'>Contact me</h1>
            <form ref={form} className='contactForm' onSubmit={sendEmail}>
                <input type='text' className='name' name='name' placeholder='Your Name'/>
                <input type='email' className='email' name='email' placeholder='Your Email'/>
                <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src='' alt='' className='link'></img>
                    <img src='' alt='' className='link'></img>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact