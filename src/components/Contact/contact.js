import React, { useEffect, useRef, useState } from 'react'
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
        dates: 'Apr 2026 to now',
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
        dates: 'Sep 2025 to Apr 2026',
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
        dates: 'Jul 2022 to Jul 2023',
        logo: sky,
        text: `As an Associate Developer at Sky UK, I worked on building and maintaining automation
            and CI/CD tooling for large-scale systems. I contributed to containerized services,
            full-stack applications, and legacy codebases, focusing on improving reliability,
            performance, and deployment efficiency across teams.`,
        skills: ['Python', 'Full-Stack Development', 'Jenkins (CI/CD)', 'Docker & Containerized Services', 'NGINX',
            'Automation Testing', 'Shell Scripting', 'Grafana Monitoring', 'SMTP & Background Services', 'Legacy Code Debugging'],
    },
];

const statusText = {
    sending: 'Sending…',
    sent: 'Message sent. Thanks!',
    error: 'Could not send right now. Try again in a minute.',
};

const Contact = () => {
    const form = useRef();
    const timeline = useRef();
    const fill = useRef();
    const [status, setStatus] = useState('idle');

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
        setStatus('sending');
        emailjs
          .sendForm('service_g3xylb5', 'template_ebxtzbf', form.current, {
            publicKey: 'TA8FfiV0DXaGs_W28',
          })
          .then(
            () => {
              e.target.reset();
              setStatus('sent');
            },
            (error) => {
              console.log('FAILED...', error.text);
              setStatus('error');
            },
          );
      };

  return (
    <>
    <section id='clients'>
        <header className='sectionHead'>
            <h2 className='sectionTitle'>Experience</h2>
            <p className='comment'>newest first</p>
        </header>
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
                                {exp.current && <span className='nowLabel'>current role</span>}
                            </div>
                            <div className='experienceText'>
                                <h3>{exp.company}</h3>
                                <p className='experienceRole'>{exp.role}</p>
                                <p className='comment mobileOnly'>{exp.dates}</p>
                                <p>{exp.text}</p>
                                <ul aria-label='Skills'>
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
    </section>
    <section id='contact'>
        <header className='sectionHead'>
            <h2 className='sectionTitle'>Get in touch</h2>
            <p className='comment'>goes straight to my inbox</p>
        </header>
        <form ref={form} className='contactForm' onSubmit={sendEmail}>
            <label>
                <span>Name</span>
                <input type='text' name='name' autoComplete='name' placeholder='Your name' required/>
            </label>
            <label>
                <span>Email</span>
                <input type='email' name='email' autoComplete='email' placeholder='email@example.com' required/>
            </label>
            <label className='fullWidth'>
                <span>Message</span>
                <textarea name='message' rows='5' placeholder='What would you like to talk about?' required></textarea>
            </label>
            <div className='formFoot fullWidth'>
                <button type='submit' className='btn btnPrimary' disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
                <p className={`formStatus ${status}`} role='status'>{statusText[status]}</p>
            </div>
        </form>
    </section>
    </>
  )
}

export default Contact
