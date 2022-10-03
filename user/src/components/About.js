import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import js from '../images/JS.png'
import react from '../images/react.png'
import html from '../images/html.png'
import python from '../images/python.png'
import sass from '../images/sass.png'
import bootstrap from '../images/bootstrap.png'
import node from '../images/node.png'
import ex from '../images/express.png'
import mongo from '../images/mongo.png'
import django from '../images/django.png'
import PostgreSQL from '../images/PostgreSQL.png'
import tableplus from '../images/tableplus.png'
import insomnia from '../images/insomnia.svg'
import github from '../images/github.png'
import git from '../images/git.png'
import css from '../images/css.png'

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <section id='about'>
      <h1 className='about-head'>Hi! I&apos;m Jack...</h1>
      <div data-aos='fade-up' className='about-bulk'>
        <p className='about-sub'>A Software Engineer with leadership, teamwork and management experience in the charity sector.</p>
        <p className='about-main'>Upon achievement of my degree in Maths and Philosophy from The University of Sheffield, I completed the General Assembly Software Engineering Immersive Programme. During the course I learnt how to develop and deploy full-stack applications with in-demand technologies such as React, Python with Django, and Node.js with Express. I also gained proficiency in creating and consuming APIs, group programming and Github version control. </p>
      </div>
      <div className='lang-logos'>
        <img className='logo' src={html} />
        <img className='logo' src={js} />
        <img className='logo' src={react} />
        <img className='logo' src={python} />
        <img className='logo' src={css} />
        <img className='logo' src={sass} />
        <img className='logo' src={bootstrap} />
        <img className='logo' src={node} />
        <img className='logo' src={ex} />
        <img className='logo' src={mongo} />
        <img className='logo' src={django} />
        <img className='logo' src={PostgreSQL} />
        <img className='logo' src={tableplus} />
        <img className='logo' src={insomnia} />
        <img className='logo' src={github} />
        <img className='logo' src={git} />
      </div>
    </section>
  )
}

export default About