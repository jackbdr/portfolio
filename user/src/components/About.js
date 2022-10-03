import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <section id='about'>
      <h1>Hi!</h1>
      <div data-aos='fade-up' className='about-text'>Upon achievement of my degree in Maths and Philosophy from The University of Sheffield, I completed the General Assembly Software Engineering Immersive Programme. During the course I learnt how to develop and deploy full-stack applications with in-demand technologies such as React, Python with Django, and Node.js with Express. I also gained proficiency in creating and consuming APIs, group programming and Github version control. </div>
    </section>
  )
}

export default About