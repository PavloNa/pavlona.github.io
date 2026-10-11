import React, { useEffect, useRef } from 'react'
import './contact.css'
import sky from '../../assets/sky.png'
import viqal from '../../assets/viqal.png'
import expedia from '../../assets/expedia.webp'
import emailjs from '@emailjs/browser';

// Newest first: the timeline reads top to bottom from today backwards
const experiences = [
    {
        company: 'Expedia Group',
        role: 'Software Development Engineer I',
        dates: 'April 2026 – Present',
        logo: expedia,
        current: true,
        text: `As a Software Development Engineer at Expedia Group in Rome, I led the architecture for a
            dynamic content-personalization feature on a service handling 21,000+ requests per minute,
            scoping work across three microservices. I built a fault-tolerant gRPC client in
            Kotlin/Spring Boot, migrated a legacy React component to a config-driven module shipped via
            A/B testing across 60+ locales, and fixed production and CI/CD reliability issues.`,
        skills: ['Kotlin & Spring Boot', 'gRPC & Microservices', 'Circuit-Breaker Fault Tolerance', 'System Architecture',
            'React', 'A/B Testing', 'Internationalization (60+ Locales)', 'Testing (97%+ Coverage)', 'CI/CD Reliability'],
    },
    {
        company: 'Viqal',
        role: 'Backend Developer',
        dates: 'September 2025 – April 2026',
        logo: viqal,
        text: `As a Backend Developer at Viqal, I designed and maintained scalable backend systems and
            cloud infrastructure. I built and deployed CI/CD pipelines on AWS, developed
            Python-based services and PostgreSQL schemas, and worked closely with leadership to
            modernize system architecture, improve security, and support enterprise-scale growth.`,
        skills: ['Python Backend Development', 'PostgreSQL & Database Design', 'AWS Infrastructure', 'Jenkins CI/CD Pipelines',
            'API Integration (Third-Party Services)', 'System Architecture & Refactoring', 'Automated Log Analysis',
            'Security & Performance Optimization', 'Incident Monitoring & Reliability'],
    },
    {
        company: 'Sky UK',
        role: 'Associate Developer',
        dates: 'July 2022 – July 2023',
        logo: sky,
        text: `As an Associate Developer at Sky UK, I worked on building and maintaining automation
            and CI/CD tooling for large-scale systems. I contributed to containerized services,
            full-stack applications, and legacy codebases, focusing on improving reliability,
            performance, and deployment efficiency across teams.`,
        skills: ['Python', 'Full-Stack Development', 'Jenkins (CI/CD)', 'Docker & Containerized Services', 'NGINX',
            'Automation Testing', 'Shell Scripting', 'Grafana Monitoring', 'SMTP & Background Services', 'Legacy Code Debugging'],
    },
];

const Contact = () => {
    const form = useRef();
    const timeline = useRef();
    const fill = useRef();

    // Fill the timeline rail as it scrolls past 60% of the viewport, lighting each dot it reaches
    useEffect(() => {
        let frame = 0;
        const update = () => {
            frame = 0;
            const rect = timeline.current.getBoundingClientRect();
            const reached = window.innerHeight * 0.6 - rect.top;
            const progress = Math.min(Math.max(reached / rect.height, 0), 1);
            fill.current.style.transform = `scaleY(${progress})`;
            timeline.current.querySelectorAll('.timelineItem').forEach((item) => {
                item.classList.toggle('passed', item.offsetTop + 32 <= reached);
            });
        };
        const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);

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
            <div className='timeline' ref={timeline}>
                <span className='timelineRail' aria-hidden='true'>
                    <span className='timelineFill' ref={fill}></span>
                </span>
                <ol className='timelineList'>
                    {experiences.map((exp) => (
                        <li key={exp.company} className={exp.current ? 'timelineItem current' : 'timelineItem'}>
                            <article className='experience card'>
                                <div className='experienceHead'>
                                    <img src={exp.logo} alt='' className='clientImg' />
                                    {exp.current && <span className='nowBadge'>Now</span>}
                                </div>
                                <div className='experienceText'>
                                    <h2>{exp.company}</h2>
                                    <h3>{exp.role}</h3>
                                    <span className='experienceDates mobileOnly'>{exp.dates}</span>
                                    <p>{exp.text}</p>
                                    <p className='skills'>Skills:</p>
                                    <ul>
                                        {exp.skills.map((skill) => <li key={skill}>{skill}</li>)}
                                    </ul>
                                </div>
                            </article>
                            <span className='timelineDot' aria-hidden='true'></span>
                            <span className='timelineDate'>{exp.dates}</span>
                        </li>
                    ))}
                </ol>
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