import React, { useRef } from 'react'
import './contact.css'
import sky from '../../assets/sky.png'
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
                        <h3>July 2022- July 2023</h3>
                        <p>As an associate developer for Sky I was responsible for delevoping various automation tools and solve bugs.</p>
                        <br/>
                        <p className='skills'>Skills:</p>
                        <ul>
                            <li>Python</li>
                            <li>Full-Stack development</li>
                            <li>Jenkins</li>
                            <li>Bug solving</li>
                            <li>Grafana</li>
                            <li>SMTP Servers</li>
                            <li>Shell Automation</li>
                            <li>Docker</li>
                            <li>Nginx</li>
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