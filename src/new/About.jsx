import React from 'react'
import './About.css'
import Navbar from '../component/Navbar'
import Buttons from '../component/Buttons'




const About = () => {
  return (
   
    <div>
        <Navbar/>
        <Buttons title="sign up"/>
        
       <header>
        <h1>About Us</h1>
    </header>
    <section id="mission">
        <h2>Our Mission</h2>
        <p>Insert your mission statement here.</p>
    </section>
    <section id="what-we-do">
        <h2>What We Do</h2>
        <p>Describe your products, services, or content here.</p>
        
    </section>
    <section id="team">
        <h2>Our Team</h2>
        <p>Introduce your team members here.</p>
    </section>
    <section id="why-choose-us">
        <h2>Why Choose Us</h2>
        <p>Highlight what sets your company/website apart.</p>
    </section>
    <footer>
        <p>Contact Us: email@example.com</p>
        <p>Connect With Us: 
            <a href="#">Facebook</a> | 
            <a href="#">Twitter</a> | 
            <a href="#">Instagram</a>
        </p>
    </footer>
    </div>
  )
}

export default About
