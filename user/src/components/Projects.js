import React, { useEffect, useState } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

import proj1Img from '../images/project1-img.png'
import proj2Img from '../images/project2-img.png'
import proj3Img from '../images/project3-img.png'
import proj4Img from '../images/project4-img.png'

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
import mapbox from '../images/mapbox.png'

const Projects = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const handleGitHover = () => {
    
  }

  return (
    <section id='projects'>
      <div className='projects-content flex-center'>
        <h2 className='projects-head section-head'>Projects</h2>
        <div className='projects'>
          <div data-aos='fade-left' className='project-div project-div-top'>
            <a className='proj-img-link' href='https://project-4-whatonearth.herokuapp.com/' target='_blank' rel='noreferrer'>
              <img className='proj-img' src={proj4Img} alt='project4-image' />
            </a>
            <div className='project-info-right'>
              <div className='proj-info-header'>
                <div className='proj-name-github'>
                  <h3 className='project-name'>What On Earth</h3>
                  <a className='proj-github' href='https://github.com/jackbdr/Project-4-what_on_earth' target='_blank' rel='noreferrer'>
                    <img src={github} />
                  </a>
                  <p>ReadMe</p>
                </div>
                <h6>1 Week</h6>
              </div>
              <p className='proj-descrip'>A full-stack application based around an interactive map, designed to be educational and fun to use (primarily for kids... or animal lovers!).</p>
              <div className='proj-lang-logos'>
                <img className='proj-logos' src={react} alt='react-logo' />
                <img className='proj-logos' src={python} alt='python-logo' />
                <img className='proj-logos' src={django} alt='django-logo' />
                <img className='proj-logos' src={js} alt='javascript-logo' />
                <img className='proj-logos' src={css} alt='css3-logo' />
                <img className='proj-logos' src={sass} alt='sass-logo' />
                <img id='mapbox-logo' className='proj-logos' src={mapbox} alt='mapbox-logo' />
              </div>
            </div>
          </div>
          <hr />
          <div data-aos='fade-right' className='project-div'>
            <div className='project-info-left'>
              <div className='proj-info-header'>
                <div className='proj-name-github'>
                  <h3 className='project-name'>Seeded</h3>
                  <a className='proj-github' href='https://github.com/jackbdr/Project-3' target='_blank' rel='noreferrer'>
                    <img src={github} />
                  </a>
                </div>
                <h6>1 Week</h6>
              </div>
              <p className='proj-descrip'>As a group of three, we created a MERN app which allows the user to view, share and review information about all different kinds of plants! </p>
              <div className='proj-lang-logos seeded-lang-logos'>
                <img className='proj-logos' src={react} alt='react-logo' />
                <img className='proj-logos' src={node} alt='node-logo' />
                <img className='proj-logos' src={ex} alt='express-logo' />
                <img className='proj-logos' src={mongo} alt='mongoDB-logo' />
                <img className='proj-logos' src={js} alt='javascript-logo' />
                <img className='proj-logos' src={css} alt='css3-logo' />
                <img className='proj-logos' src={sass} alt='sass-logo' />
                <img className='proj-logos' src={bootstrap} alt='bootstrap-logo' />
              </div>
            </div>
            <a className='proj-img-link' href='https://project-seeded.herokuapp.com/' target='_blank' rel='noreferrer'>
              <img className='proj-img' src={proj3Img} alt='project3-image' />
            </a>
          </div>
          <hr />
          <div data-aos='fade-left' className='project-div'>
            <a className='proj-img-link' href='https://fruity4you.netlify.app/' target='_blank' rel='noreferrer'>
              <img className='proj-img' src={proj2Img} alt='project2-image' />
            </a>
            <div className='project-info-right'>
              <div className='proj-info-header'>
                <div className='proj-name-github'>
                  <h3 className='project-name'>Fruity 4 You</h3>
                  <a className='proj-github' href='https://github.com/jackbdr/Project-2-FruitsHackathon' target='_blank' rel='noreferrer'>
                    <img src={github} />
                  </a>
                  <p>ReadMe</p>
                </div>
                <h6>2 Day Hackathon</h6>
              </div>
              <p className='proj-descrip'>Working in a group of three, this was a 2 day hackathon  I mainly worked on the functionality of the “salad maker” page. </p>
              <div className='proj-lang-logos'>
                <img className='proj-logos' src={react} alt='react-logo' />
                <img className='proj-logos' src={js} alt='javascript-logo' />
                <img className='proj-logos' src={css} alt='css3-logo' />
                <img className='proj-logos' src={sass} alt='sass-logo' />
              </div>
            </div>
          </div>
          <hr />
          <div data-aos='fade-right' className='project-div project-div-bottom'>
            <div className='project-info-left'>
              <div className='proj-info-header'>
                <div className='proj-name-github'>
                  <h3 className='project-name'>Pac Man</h3>
                  <a className='proj-github' href='https://github.com/jackbdr/Project-1' target='_blank' rel='noreferrer'>
                    <img src={github} />
                  </a>
                </div>
                <h6>1 Week</h6>
              </div>
              <p className='proj-descrip'>A solo project and the first opportunity to get creative with what I had learnt in week 1 of General Assembly&apos;s Software Engineering Immersive.</p>
              <div className='proj-lang-logos'>
                <img className='proj-logos' src={js} alt='javascript-logo' />
                <img className='proj-logos' src={html} alt='html5-logo' />
                <img className='proj-logos' src={css} alt='css3-logo' />
              </div>
            </div>
            <a className='proj-img-link' href='https://jackbdr.github.io/Project-1/' target='_blank' rel="noreferrer">
              <img className='proj-img' src={proj1Img} alt='project1-image' />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects