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
    <section id='about'>
      <h1 className='about-head'>Hi!</h1>
      <div data-aos='fade-up' className='about-bulk'>
        <p className='about-sub'>A Software Engineer with leadership, teamwork and management experience in the charity sector.</p>
        <p className='about-main'>Upon achievement of my degree in Maths and Philosophy from The University of Sheffield, I completed the General Assembly Software Engineering Immersive Programme. During the course I learnt how to develop and deploy full-stack applications with in-demand technologies such as React, Python with Django, and Node.js with Express. I also gained proficiency in creating and consuming APIs, group programming and Github version control. </p>
      </div>
      <div data-aos='fade-up' className='lang-logos'>
        <div className='logo-wrap'>
          <img className='logo' id='1' src={html} onMouseOver={handleLogoHover} onMouseOut={handleLogoOff} />
          {logoNum === 1 && <p>HTML5</p>}
        </div>
        <div className='logo-wrap'>
          <img className='logo' id='2' src={js} />
          {logoNum === 2 && <p>JavaScript</p>}
        </div>
        <div className='logo-wrap'>
          <img className='logo' id='3' src={react} />
          {logoNum === 3 && <p>React</p>}
        </div>
        <div className='logo-wrap'>
          <img className='logo' id='4' src={python} />
          {logoNum === 4 && <p>Python</p>}
        </div>
        <div className='logo-wrap'>
          <img className='logo' id='5' src={css} />
          {logoNum === 5 && <p>CSS3</p>}
        </div>
        <div className='logo-wrap'>
          <img className='logo' id='6' src={sass} />
          {logoNum === 6 && <p>Sass</p>}
        </div>
        <div className='logo-wrap'>
          <img className='logo' id='7' src={bootstrap} />
          {logoNum === 7 && <p>Bootstrap</p>}
        </div>
        <div className='logo-wrap'>
          <img className='logo' id='8' src={node} />
          {logoNum === 8 && <p>Node.js</p>}
        </div>
        <div className='logo-wrap'>
          <img className='logo' id='9' src={ex} />
          {logoNum === 9 && <p>Express</p>}
        </div>
        <div className='logo-wrap'>
          <img className='logo' id='10' src={mongo} />
          {logoNum === 10 && <p>MongoDB</p>}
        </div>
        <div className='logo-wrap'>
          <img className='logo' id='11' src={django} />
          {logoNum === 11 && <p>Django</p>}
        </div>
        <div className='logo-wrap'>
          <img className='logo' id='12' src={PostgreSQL} />
          {logoNum === 12 && <p>PostgreSQL</p>}
        </div>
        <div className='logo-wrap'>
          <img className='logo' id='13' src={tableplus} />
          {logoNum === 13 && <p>TablePlus</p>}
        </div>
        <div className='logo-wrap'>
          <img className='logo' id='14' src={insomnia} />
          {logoNum === 14 && <p>Insomnia</p>}
        </div>
        <div className='logo-wrap'>
          <img className='logo' id='15' src={github} />
          {logoNum === 15 && <p>GitHub</p>}
        </div>
        <div className='logo-wrap'>
          <img className='logo' id='16' src={git} />
          {logoNum === 16 && <p>Git</p>}
        </div>
      </div>
    </section>
  )
}

export default About