import React, { useEffect, useState } from 'react'
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

  const [logoNum, setLogoNum] = useState(null)

  const handleLogoHover = (e) => {
    setLogoNum(parseFloat(e.target.id))
  }

  const handleLogoOff = () => {
    setLogoNum(null)
  }

  return (
    <section id='about' className='flex-center'>
      <div className='about-content flex-center'>
        <h2 className='about-head section-head'>Hi! I&apos;m Jack...</h2>
        <div data-aos='fade-up' className='about-bulk'>
          <p className='about-sub'>A Software Engineer with leadership, teamwork and management experience in the charity sector.</p>
          <p className='about-main'>Upon achievement of my degree in Maths and Philosophy from The University of Sheffield, I completed the General Assembly Software Engineering Immersive Programme. During the course I learnt how to develop and deploy full-stack applications with in-demand technologies such as React, Python with Django, and Node.js with Express. I also gained proficiency in creating and consuming APIs, group programming and Github version control. </p>
        </div>
        <div data-aos='fade-up' className='lang-logos'>
          <div className='logo-wrap'>
            <img className='logo' id='1' src={html} onMouseOver={handleLogoHover} onMouseOut={handleLogoOff} />
            {logoNum === 1 && <p className='lang-name'>HTML5</p>}
            {/* <p className='lang-name' >HTML5</p> */}
          </div>
          <div className='logo-wrap'>
            <img className='logo' id='2' src={js} onMouseOver={handleLogoHover} onMouseOut={handleLogoOff} />
            {logoNum === 2 && <p className='lang-name'>JavaScript</p>}
          </div>
          <div className='logo-wrap'>
            <img className='logo' id='3' src={react} onMouseOver={handleLogoHover} onMouseOut={handleLogoOff} />
            {logoNum === 3 && <p className='lang-name'>React</p>}
          </div>
          <div className='logo-wrap'>
            <img className='logo' id='4' src={python} onMouseOver={handleLogoHover} onMouseOut={handleLogoOff} />
            {logoNum === 4 && <p className='lang-name'>Python</p>}
          </div>
          <div className='logo-wrap'>
            <img className='logo' id='5' src={css} onMouseOver={handleLogoHover} onMouseOut={handleLogoOff} />
            {logoNum === 5 && <p className='lang-name'>CSS3</p>}
          </div>
          <div className='logo-wrap'>
            <img className='logo' id='6' src={sass} onMouseOver={handleLogoHover} onMouseOut={handleLogoOff} />
            {logoNum === 6 && <p className='lang-name'>Sass</p>}
          </div>
          <div className='logo-wrap'>
            <img className='logo' id='7' src={bootstrap} onMouseOver={handleLogoHover} onMouseOut={handleLogoOff} />
            {logoNum === 7 && <p className='lang-name'>Bootstrap</p>}
          </div>
          <div className='logo-wrap'>
            <img className='logo' id='8' src={node} onMouseOver={handleLogoHover} onMouseOut={handleLogoOff} />
            {logoNum === 8 && <p className='lang-name'>Node.js</p>}
          </div>
          <div className='logo-wrap'>
            <img className='logo' id='9' src={ex} onMouseOver={handleLogoHover} onMouseOut={handleLogoOff} />
            {logoNum === 9 && <p className='lang-name'>Express</p>}
          </div>
          <div className='logo-wrap'>
            <img className='logo' id='10' src={mongo} onMouseOver={handleLogoHover} onMouseOut={handleLogoOff} />
            {logoNum === 10 && <p className='lang-name'>MongoDB</p>}
          </div>
          <div className='logo-wrap'>
            <img className='logo' id='11' src={django} onMouseOver={handleLogoHover} onMouseOut={handleLogoOff} />
            {logoNum === 11 && <p className='lang-name'>Django</p>}
          </div>
          <div className='logo-wrap'>
            <img className='logo' id='12' src={PostgreSQL} onMouseOver={handleLogoHover} onMouseOut={handleLogoOff} />
            {logoNum === 12 && <p className='lang-name'>PostgreSQL</p>}
          </div>
          <div className='logo-wrap'>
            <img className='logo' id='13' src={tableplus} onMouseOver={handleLogoHover} onMouseOut={handleLogoOff} />
            {logoNum === 13 && <p className='lang-name'>TablePlus</p>}
          </div>
          <div className='logo-wrap'>
            <img className='logo' id='14' src={insomnia} onMouseOver={handleLogoHover} onMouseOut={handleLogoOff} />
            {logoNum === 14 && <p className='lang-name'>Insomnia</p>}
          </div>
          <div className='logo-wrap'>
            <img className='logo' id='15' src={github} onMouseOver={handleLogoHover} onMouseOut={handleLogoOff} />
            {logoNum === 15 && <p className='lang-name'>GitHub</p>}
          </div>
          <div className='logo-wrap'>
            <img className='logo' id='16' src={git} onMouseOver={handleLogoHover} onMouseOut={handleLogoOff} />
            {logoNum === 16 && <p className='lang-name'>Git Version Control</p>}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About