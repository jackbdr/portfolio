import React from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

import proj1Img from '../images/project1-img.png'
import proj2Img from '../images/project2-img.png'
import proj3Img from '../images/project3-img.png'
import proj4Img from '../images/project4-img.png'

import github from '../images/github.png'

const Projects = () => {

  return (
    <section id='projects'>
      <div className='projects-content flex-center'>
        <h2 className='projects-head section-head'>Projects</h2>
        <div className='project-div project-div-top'>
          <a className='proj-img-link' href='https://project-4-whatonearth.herokuapp.com/' target='_blank' rel="noreferrer">
            <img className='proj-img' src={proj4Img} alt='project4-image' />
          </a>
          <div className='project-info-right'>
            <div className='proj-info-header'>
              <a className='proj-github'>
                <img src={github} />
              </a>
              <h3 className='project-name'>What On Earth</h3>
            </div>
            <p className='proj-descrip'>Designed to be educational and fun to use, this is a full-stack application based around an interactive map which allows the user to view and share all different kinds of animals!</p>
          </div>
        </div>
        <div className='project-div'>
          <div className='project-info-left'>
            <h3 className='project-name'>Seeded</h3>
            <p className='proj-descrip'>Test</p>
          </div>
          <a className='proj-img-link' href='https://project-seeded.herokuapp.com/' target='_blank' rel="noreferrer">
            <img className='proj-img' src={proj3Img} alt='project3-image' />
          </a>
        </div>
        <div className='project-div'>
          <a className='proj-img-link' href='https://fruity4you.netlify.app/' target='_blank' rel="noreferrer">
            <img className='proj-img' src={proj2Img} alt='project2-image' />
          </a>
          <div className='project-info-right'>
            <div className='proj-info-header'>
              <a className='proj-github'>
                <img src={github} />
              </a>
              <h3 className='project-name'>Fruity 4 You</h3>
            </div>
            <p className='proj-descrip'>Test</p>
          </div>
        </div>
        <div className='project-div project-div-bottom'>
          <div className='project-info-left'>
            <h3 className='project-name'>Pac Man</h3>
            <p className='proj-descrip'>Test</p>
          </div>
          <a className='proj-img-link' href='https://jackbdr.github.io/Project-1/' target='_blank' rel="noreferrer">
            <img className='proj-img' src={proj1Img} alt='project1-image' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects