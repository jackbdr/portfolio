import React from 'react'

import proj1Img from '../images/project1-img.png'
import proj2Img from '../images/project2-img.png'
import proj3Img from '../images/project3-img.png'
import proj4Img from '../images/project4-img.png'

const Projects = () => {

  return (
    <section id='projects'>
      <div className='projects-content flex-center'>
        <h2 className='projects-head section-head'>Projects</h2>
        <div className='project-div'>
          <a className='proj-img-link'>
            <img src={proj4Img} alt='project4-image' />
          </a>
          <div className='project-info'>
            <h3 className='project-name'>What On Earth</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects